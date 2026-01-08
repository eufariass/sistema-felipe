"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { taskSchema, subtaskSchema, type TaskInput, type SubtaskInput } from "@/lib/validations/tasks";

export async function createTask(data: TaskInput) {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Não autenticado");
  }

  const validated = taskSchema.parse(data);

  const { data: task, error } = await supabase
    .from("tasks")
    .insert({
      ...validated,
      user_id: user.id,
    })
    .select()
    .single();

  if (error) throw error;

  revalidatePath("/tasks");
  return task;
}

export async function updateTask(id: string, data: Partial<TaskInput>) {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Não autenticado");
  }

  // If task is being completed, set completed_at
  if (data.status === "completed") {
    data.completed_at = new Date().toISOString();
  }

  const { data: task, error } = await supabase
    .from("tasks")
    .update(data)
    .eq("id", id)
    .eq("user_id", user.id)
    .select()
    .single();

  if (error) throw error;

  revalidatePath("/tasks");
  return task;
}

export async function deleteTask(id: string) {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Não autenticado");
  }

  const { error } = await supabase
    .from("tasks")
    .delete()
    .eq("id", id)
    .eq("user_id", user.id);

  if (error) throw error;

  revalidatePath("/tasks");
}

export async function getTasks(filters?: {
  status?: "pending" | "in_progress" | "completed" | "cancelled";
  priority?: "low" | "medium" | "high" | "urgent";
  category?: string;
}) {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Não autenticado");
  }

  let query = supabase
    .from("tasks")
    .select("*, subtasks(*)")
    .eq("user_id", user.id);

  if (filters?.status) {
    query = query.eq("status", filters.status);
  }

  if (filters?.priority) {
    query = query.eq("priority", filters.priority);
  }

  if (filters?.category) {
    query = query.eq("category", filters.category);
  }

  const { data, error } = await query.order("created_at", { ascending: false });

  if (error) throw error;

  return data || [];
}

export async function createSubtask(data: SubtaskInput) {
  const supabase = createServerComponentClient({ cookies });

  const validated = subtaskSchema.parse(data);

  const { data: subtask, error } = await supabase
    .from("subtasks")
    .insert(validated)
    .select()
    .single();

  if (error) throw error;

  revalidatePath("/tasks");
  return subtask;
}

export async function updateSubtask(id: string, data: Partial<SubtaskInput>) {
  const supabase = createServerComponentClient({ cookies });

  const { data: subtask, error } = await supabase
    .from("subtasks")
    .update(data)
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;

  revalidatePath("/tasks");
  return subtask;
}

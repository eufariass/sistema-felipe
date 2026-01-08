"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { goalSchema, milestoneSchema, type GoalInput, type MilestoneInput } from "@/lib/validations/goals";
import { Database } from "@/types/database";

export async function createGoal(data: GoalInput) {
  const supabase = createServerComponentClient<Database>({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Não autenticado");
  }

  const validated = goalSchema.parse(data);

  const { data: goal, error } = await supabase
    .from("goals")
    .insert({
      ...validated,
      user_id: user.id,
    })
    .select()
    .single();

  if (error) throw error;

  revalidatePath("/goals");
  return goal;
}

export async function updateGoal(id: string, data: Partial<GoalInput>) {
  const supabase = createServerComponentClient<Database>({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Não autenticado");
  }

  const { data: goal, error } = await supabase
    .from("goals")
    .update(data)
    .eq("id", id)
    .eq("user_id", user.id)
    .select()
    .single();

  if (error) throw error;

  revalidatePath("/goals");
  return goal;
}

export async function deleteGoal(id: string) {
  const supabase = createServerComponentClient<Database>({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Não autenticado");
  }

  const { error } = await supabase
    .from("goals")
    .delete()
    .eq("id", id)
    .eq("user_id", user.id);

  if (error) throw error;

  revalidatePath("/goals");
}

export async function getGoals() {
  const supabase = createServerComponentClient<Database>({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Não autenticado");
  }

  const { data, error } = await supabase
    .from("goals")
    .select("*, milestones(*)")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  if (error) throw error;

  return data || [];
}

export async function createMilestone(data: MilestoneInput) {
  const supabase = createServerComponentClient<Database>({ cookies });

  const validated = milestoneSchema.parse(data);

  const { data: milestone, error } = await supabase
    .from("milestones")
    .insert(validated)
    .select()
    .single();

  if (error) throw error;

  revalidatePath("/goals");
  return milestone;
}

export async function updateMilestone(id: string, data: Partial<MilestoneInput>) {
  const supabase = createServerComponentClient<Database>({ cookies });

  const { data: milestone, error } = await supabase
    .from("milestones")
    .update(data)
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;

  revalidatePath("/goals");
  return milestone;
}

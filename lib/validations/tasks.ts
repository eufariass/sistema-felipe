import { z } from "zod";

export const taskSchema = z.object({
  title: z.string().min(1, "Título é obrigatório"),
  description: z.string().nullable().optional(),
  due_date: z.string().nullable().optional(),
  priority: z.enum(["low", "medium", "high", "urgent"]).default("medium"),
  status: z.enum(["pending", "in_progress", "completed", "cancelled"]).default("pending"),
  category: z.string().nullable().optional(),
  tags: z.array(z.string()).default([]),
  estimated_time: z.number().nullable().optional(),
  actual_time: z.number().nullable().optional(),
  goal_id: z.string().nullable().optional(),
  recurrence: z.string().nullable().optional(),
  completed_at: z.string().nullable().optional(),
});

export const subtaskSchema = z.object({
  task_id: z.string().min(1, "Tarefa é obrigatória"),
  title: z.string().min(1, "Título é obrigatório"),
  completed: z.boolean().default(false),
});

export type TaskInput = z.infer<typeof taskSchema>;
export type SubtaskInput = z.infer<typeof subtaskSchema>;

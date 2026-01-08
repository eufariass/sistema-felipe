import { z } from "zod";

export const goalSchema = z.object({
  title: z.string().min(1, "Título é obrigatório"),
  description: z.string().nullable().optional(),
  category: z.string().min(1, "Categoria é obrigatória"),
  target_value: z.number().positive("Valor alvo deve ser positivo"),
  current_value: z.number().min(0, "Valor atual não pode ser negativo").default(0),
  deadline: z.string().nullable().optional(),
  priority: z.enum(["low", "medium", "high"]).default("medium"),
  color: z.string().regex(/^#[0-9A-F]{6}$/i, "Cor inválida"),
  icon: z.string(),
  parent_id: z.string().nullable().optional(),
  completed: z.boolean().default(false),
});

export const milestoneSchema = z.object({
  goal_id: z.string().min(1, "Meta é obrigatória"),
  title: z.string().min(1, "Título é obrigatório"),
  value: z.number().positive("Valor deve ser positivo"),
  completed: z.boolean().default(false),
  completed_at: z.string().nullable().optional(),
});

export type GoalInput = z.infer<typeof goalSchema>;
export type MilestoneInput = z.infer<typeof milestoneSchema>;

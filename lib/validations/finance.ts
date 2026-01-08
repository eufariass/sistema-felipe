import { z } from "zod";

export const accountSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  type: z.string().min(1, "Tipo é obrigatório"),
  balance: z.number(),
  initial_balance: z.number(),
  color: z.string().regex(/^#[0-9A-F]{6}$/i, "Cor inválida"),
  icon: z.string(),
});

export const categorySchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  type: z.enum(["income", "expense"]),
  color: z.string().regex(/^#[0-9A-F]{6}$/i, "Cor inválida"),
  icon: z.string(),
  parent_id: z.string().nullable().optional(),
});

export const transactionSchema = z.object({
  description: z.string().min(1, "Descrição é obrigatória"),
  amount: z.number().positive("Valor deve ser positivo"),
  date: z.string(),
  category_id: z.string().min(1, "Categoria é obrigatória"),
  account_id: z.string().min(1, "Conta é obrigatória"),
  type: z.enum(["income", "expense", "transfer"]),
  status: z.enum(["confirmed", "pending"]).default("confirmed"),
  tags: z.array(z.string()).default([]),
  notes: z.string().nullable().optional(),
  attachment_url: z.string().nullable().optional(),
  recurrence_id: z.string().nullable().optional(),
  installment_id: z.string().nullable().optional(),
});

export const recurrenceSchema = z.object({
  description: z.string().min(1, "Descrição é obrigatória"),
  amount: z.number().positive("Valor deve ser positivo"),
  category_id: z.string().min(1, "Categoria é obrigatória"),
  account_id: z.string().min(1, "Conta é obrigatória"),
  type: z.enum(["income", "expense"]),
  frequency: z.enum(["daily", "weekly", "monthly", "yearly"]),
  start_date: z.string(),
  end_date: z.string().nullable().optional(),
});

export const installmentSchema = z.object({
  description: z.string().min(1, "Descrição é obrigatória"),
  total_amount: z.number().positive("Valor total deve ser positivo"),
  total_installments: z.number().int().positive("Número de parcelas deve ser positivo"),
  category_id: z.string().min(1, "Categoria é obrigatória"),
  account_id: z.string().min(1, "Conta é obrigatória"),
  start_date: z.string(),
});

export const budgetSchema = z.object({
  category_id: z.string().min(1, "Categoria é obrigatória"),
  amount: z.number().positive("Valor deve ser positivo"),
  period: z.string().min(1, "Período é obrigatório"),
});

export type AccountInput = z.infer<typeof accountSchema>;
export type CategoryInput = z.infer<typeof categorySchema>;
export type TransactionInput = z.infer<typeof transactionSchema>;
export type RecurrenceInput = z.infer<typeof recurrenceSchema>;
export type InstallmentInput = z.infer<typeof installmentSchema>;
export type BudgetInput = z.infer<typeof budgetSchema>;

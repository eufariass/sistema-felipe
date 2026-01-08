"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { transactionSchema, type TransactionInput } from "@/lib/validations/finance";

export async function createTransaction(data: TransactionInput) {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Não autenticado");
  }

  const validated = transactionSchema.parse(data);

  // Create transaction
  const { data: transaction, error: transactionError } = await supabase
    .from("transactions")
    .insert({
      ...validated,
      user_id: user.id,
    })
    .select()
    .single();

  if (transactionError) throw transactionError;

  // Update account balance
  const { data: account } = await supabase
    .from("accounts")
    .select("balance")
    .eq("id", validated.account_id)
    .single();

  if (account) {
    const newBalance =
      validated.type === "income"
        ? account.balance + validated.amount
        : account.balance - validated.amount;

    await supabase
      .from("accounts")
      .update({ balance: newBalance })
      .eq("id", validated.account_id);
  }

  revalidatePath("/finance");
  return transaction;
}

export async function updateTransaction(id: string, data: Partial<TransactionInput>) {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Não autenticado");
  }

  // Get original transaction
  const { data: original } = await supabase
    .from("transactions")
    .select("*")
    .eq("id", id)
    .eq("user_id", user.id)
    .single();

  if (!original) {
    throw new Error("Transação não encontrada");
  }

  // Update transaction
  const { data: transaction, error } = await supabase
    .from("transactions")
    .update(data)
    .eq("id", id)
    .eq("user_id", user.id)
    .select()
    .single();

  if (error) throw error;

  // Recalculate account balance
  const { data: account } = await supabase
    .from("accounts")
    .select("balance")
    .eq("id", original.account_id)
    .single();

  if (account) {
    // Revert original transaction
    let newBalance =
      original.type === "income"
        ? account.balance - original.amount
        : account.balance + original.amount;

    // Apply new transaction
    const updatedAmount = data.amount ?? original.amount;
    const updatedType = data.type ?? original.type;

    newBalance =
      updatedType === "income"
        ? newBalance + updatedAmount
        : newBalance - updatedAmount;

    await supabase
      .from("accounts")
      .update({ balance: newBalance })
      .eq("id", original.account_id);
  }

  revalidatePath("/finance");
  return transaction;
}

export async function deleteTransaction(id: string) {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Não autenticado");
  }

  // Get transaction to update account balance
  const { data: transaction } = await supabase
    .from("transactions")
    .select("*")
    .eq("id", id)
    .eq("user_id", user.id)
    .single();

  if (transaction) {
    // Update account balance
    const { data: account } = await supabase
      .from("accounts")
      .select("balance")
      .eq("id", transaction.account_id)
      .single();

    if (account) {
      const newBalance =
        transaction.type === "income"
          ? account.balance - transaction.amount
          : account.balance + transaction.amount;

      await supabase
        .from("accounts")
        .update({ balance: newBalance })
        .eq("id", transaction.account_id);
    }
  }

  const { error } = await supabase
    .from("transactions")
    .delete()
    .eq("id", id)
    .eq("user_id", user.id);

  if (error) throw error;

  revalidatePath("/finance");
}

export async function getTransactions(filters?: {
  startDate?: string;
  endDate?: string;
  categoryId?: string;
  accountId?: string;
  type?: "income" | "expense" | "transfer";
}) {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Não autenticado");
  }

  let query = supabase
    .from("transactions")
    .select("*, categories(name, color, icon), accounts(name, color)")
    .eq("user_id", user.id);

  if (filters?.startDate) {
    query = query.gte("date", filters.startDate);
  }

  if (filters?.endDate) {
    query = query.lte("date", filters.endDate);
  }

  if (filters?.categoryId) {
    query = query.eq("category_id", filters.categoryId);
  }

  if (filters?.accountId) {
    query = query.eq("account_id", filters.accountId);
  }

  if (filters?.type) {
    query = query.eq("type", filters.type);
  }

  const { data, error } = await query.order("date", { ascending: false });

  if (error) throw error;

  return data || [];
}

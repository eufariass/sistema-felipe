export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          email: string;
          full_name: string | null;
          avatar_url: string | null;
          currency: string;
          first_day_of_week: number;
          theme: "light" | "dark" | "system";
          date_format: string;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database["public"]["Tables"]["profiles"]["Row"], "created_at" | "updated_at">;
        Update: Partial<Database["public"]["Tables"]["profiles"]["Insert"]>;
      };
      accounts: {
        Row: {
          id: string;
          user_id: string;
          name: string;
          type: string;
          balance: number;
          initial_balance: number;
          color: string;
          icon: string;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database["public"]["Tables"]["accounts"]["Row"], "id" | "created_at" | "updated_at">;
        Update: Partial<Database["public"]["Tables"]["accounts"]["Insert"]>;
      };
      categories: {
        Row: {
          id: string;
          user_id: string;
          name: string;
          type: "income" | "expense";
          color: string;
          icon: string;
          parent_id: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database["public"]["Tables"]["categories"]["Row"], "id" | "created_at" | "updated_at">;
        Update: Partial<Database["public"]["Tables"]["categories"]["Insert"]>;
      };
      transactions: {
        Row: {
          id: string;
          user_id: string;
          description: string;
          amount: number;
          date: string;
          category_id: string;
          account_id: string;
          type: "income" | "expense" | "transfer";
          status: "confirmed" | "pending";
          tags: string[];
          notes: string | null;
          attachment_url: string | null;
          recurrence_id: string | null;
          installment_id: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database["public"]["Tables"]["transactions"]["Row"], "id" | "created_at" | "updated_at">;
        Update: Partial<Database["public"]["Tables"]["transactions"]["Insert"]>;
      };
      recurrences: {
        Row: {
          id: string;
          user_id: string;
          description: string;
          amount: number;
          category_id: string;
          account_id: string;
          type: "income" | "expense";
          frequency: "daily" | "weekly" | "monthly" | "yearly";
          start_date: string;
          end_date: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database["public"]["Tables"]["recurrences"]["Row"], "id" | "created_at" | "updated_at">;
        Update: Partial<Database["public"]["Tables"]["recurrences"]["Insert"]>;
      };
      installments: {
        Row: {
          id: string;
          user_id: string;
          description: string;
          total_amount: number;
          total_installments: number;
          paid_installments: number;
          installment_amount: number;
          category_id: string;
          account_id: string;
          start_date: string;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database["public"]["Tables"]["installments"]["Row"], "id" | "created_at" | "updated_at">;
        Update: Partial<Database["public"]["Tables"]["installments"]["Insert"]>;
      };
      budgets: {
        Row: {
          id: string;
          user_id: string;
          category_id: string;
          amount: number;
          period: string;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database["public"]["Tables"]["budgets"]["Row"], "id" | "created_at" | "updated_at">;
        Update: Partial<Database["public"]["Tables"]["budgets"]["Insert"]>;
      };
      goals: {
        Row: {
          id: string;
          user_id: string;
          title: string;
          description: string | null;
          category: string;
          target_value: number;
          current_value: number;
          deadline: string | null;
          priority: "low" | "medium" | "high";
          color: string;
          icon: string;
          parent_id: string | null;
          completed: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database["public"]["Tables"]["goals"]["Row"], "id" | "created_at" | "updated_at">;
        Update: Partial<Database["public"]["Tables"]["goals"]["Insert"]>;
      };
      milestones: {
        Row: {
          id: string;
          goal_id: string;
          title: string;
          value: number;
          completed: boolean;
          completed_at: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database["public"]["Tables"]["milestones"]["Row"], "id" | "created_at" | "updated_at">;
        Update: Partial<Database["public"]["Tables"]["milestones"]["Insert"]>;
      };
      tasks: {
        Row: {
          id: string;
          user_id: string;
          title: string;
          description: string | null;
          due_date: string | null;
          priority: "low" | "medium" | "high" | "urgent";
          status: "pending" | "in_progress" | "completed" | "cancelled";
          category: string | null;
          tags: string[];
          estimated_time: number | null;
          actual_time: number | null;
          goal_id: string | null;
          recurrence: string | null;
          completed_at: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database["public"]["Tables"]["tasks"]["Row"], "id" | "created_at" | "updated_at">;
        Update: Partial<Database["public"]["Tables"]["tasks"]["Insert"]>;
      };
      subtasks: {
        Row: {
          id: string;
          task_id: string;
          title: string;
          completed: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database["public"]["Tables"]["subtasks"]["Row"], "id" | "created_at" | "updated_at">;
        Update: Partial<Database["public"]["Tables"]["subtasks"]["Insert"]>;
      };
    };
  };
}

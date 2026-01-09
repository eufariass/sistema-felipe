"use client";

import { useState } from "react";
import { Header } from "@/components/layout/header";
import { StatCard } from "@/components/modern/stat-card";
import { GlassCard } from "@/components/modern/glass-card";
import { AnimatedCounter } from "@/components/modern/animated-counter";
import { motion } from "framer-motion";
import { Checkbox } from "@/components/ui/checkbox";
import { Plus, CheckSquare, Calendar, AlertCircle, Sparkles } from "lucide-react";
import { formatDate } from "@/lib/utils";

export default function TasksPage() {
  const [showForm, setShowForm] = useState(false);
  const [filter, setFilter] = useState<"all" | "pending" | "in_progress" | "completed">("all");

  const tasks: any[] = []; // Will be fetched from Supabase

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "urgent":
        return { bg: "bg-red-500/20", text: "text-red-500", border: "border-red-500/30" };
      case "high":
        return { bg: "bg-orange-500/20", text: "text-orange-500", border: "border-orange-500/30" };
      case "medium":
        return { bg: "bg-yellow-500/20", text: "text-yellow-500", border: "border-yellow-500/30" };
      case "low":
        return { bg: "bg-blue-500/20", text: "text-blue-500", border: "border-blue-500/30" };
      default:
        return { bg: "bg-gray-500/20", text: "text-gray-500", border: "border-gray-500/30" };
    }
  };

  return (
    <div className="min-h-screen">
      <Header title="Tarefas" description="Organize e gerencie suas tarefas de forma eficiente" />

      <div className="p-6 space-y-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass rounded-2xl p-6 border border-border/50 relative overflow-hidden"
        >
          <motion.div
            className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
            }}
          />

          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <motion.div
                className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                <CheckSquare className="w-8 h-8 text-white" />
              </motion.div>
              <div>
                <h2 className="text-2xl font-bold">Minhas Tarefas</h2>
                <p className="text-muted-foreground">
                  Organize e acompanhe suas tarefas
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex gap-2 glass rounded-xl p-1">
                {["all", "pending", "in_progress", "completed"].map((f) => (
                  <motion.button
                    key={f}
                    onClick={() => setFilter(f as any)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      filter === f
                        ? "bg-primary text-white"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {f === "all" ? "Todas" : f === "pending" ? "Pendentes" : f === "in_progress" ? "Em Progresso" : "Concluídas"}
                  </motion.button>
                ))}
              </div>

              <motion.button
                onClick={() => setShowForm(!showForm)}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-medium hover:shadow-lg hover:shadow-primary/50 transition-shadow flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Plus className="w-5 h-5" />
                Nova Tarefa
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid gap-4 md:grid-cols-4">
          <StatCard
            title="Total"
            value={<AnimatedCounter from={0} to={0} duration={1.5} />}
            description="Tarefas criadas"
            icon={CheckSquare}
            gradient="from-purple-500 to-pink-500"
            delay={0}
          />
          <StatCard
            title="Pendentes"
            value={<AnimatedCounter from={0} to={0} duration={1.5} />}
            description="A fazer"
            icon={AlertCircle}
            gradient="from-yellow-500 to-orange-500"
            delay={0.1}
          />
          <StatCard
            title="Concluídas Hoje"
            value={<AnimatedCounter from={0} to={0} duration={1.5} />}
            description="Hoje"
            icon={CheckSquare}
            gradient="from-green-500 to-emerald-500"
            delay={0.2}
          />
          <StatCard
            title="Atrasadas"
            value={<AnimatedCounter from={0} to={0} duration={1.5} />}
            description="Requerem atenção"
            icon={Calendar}
            gradient="from-red-500 to-orange-500"
            delay={0.3}
          />
        </div>

        {/* Tasks List */}
        {tasks.length === 0 ? (
          <GlassCard delay={0.4}>
            <div className="flex flex-col items-center justify-center py-16">
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 mb-6">
                  <CheckSquare className="w-16 h-16 text-primary" />
                </div>
              </motion.div>

              <h3 className="text-2xl font-bold mb-2">Nenhuma tarefa criada</h3>
              <p className="text-muted-foreground text-center mb-6 max-w-md">
                Comece criando sua primeira tarefa e organize seu dia de forma eficiente
              </p>

              <motion.button
                onClick={() => setShowForm(true)}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-medium hover:shadow-lg hover:shadow-primary/50 transition-shadow flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Plus className="w-5 h-5" />
                Criar Primeira Tarefa
              </motion.button>
            </div>
          </GlassCard>
        ) : (
          <div className="space-y-3">
            {tasks.map((task: any, index: number) => {
              const priorityColors = getPriorityColor(task.priority);

              return (
                <motion.div
                  key={task.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <GlassCard delay={0} className={`border-l-4 ${priorityColors.border}`}>
                    <div className="flex items-start gap-4">
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Checkbox
                          checked={task.status === "completed"}
                          className="mt-1"
                        />
                      </motion.div>

                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3
                              className={`font-bold text-lg ${
                                task.status === "completed"
                                  ? "line-through text-muted-foreground"
                                  : ""
                              }`}
                            >
                              {task.title}
                            </h3>
                            {task.description && (
                              <p className="text-sm text-muted-foreground mt-1">
                                {task.description}
                              </p>
                            )}
                          </div>

                          <span
                            className={`text-xs px-3 py-1 rounded-full font-medium ${priorityColors.bg} ${priorityColors.text}`}
                          >
                            {task.priority}
                          </span>
                        </div>

                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          {task.due_date && (
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <span>{formatDate(task.due_date)}</span>
                            </div>
                          )}
                          {task.category && (
                            <span className="px-2 py-1 rounded-md bg-white/5 border border-border/30">
                              {task.category}
                            </span>
                          )}
                          {task.subtasks && task.subtasks.length > 0 && (
                            <div className="flex items-center gap-1">
                              <CheckSquare className="w-4 h-4" />
                              <span>
                                {task.subtasks.filter((s: any) => s.completed).length}/
                                {task.subtasks.length} subtarefas
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

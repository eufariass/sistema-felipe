"use client";

import { useState } from "react";
import { Header } from "@/components/layout/header";
import { StatCard } from "@/components/modern/stat-card";
import { GlassCard } from "@/components/modern/glass-card";
import { AnimatedCounter } from "@/components/modern/animated-counter";
import { motion } from "framer-motion";
import { Plus, Target, Calendar, TrendingUp, Sparkles } from "lucide-react";
import { formatCurrency, formatDate } from "@/lib/utils";

export default function GoalsPage() {
  const [showForm, setShowForm] = useState(false);

  const goals: any[] = []; // Will be fetched from Supabase

  const calculateProgress = (current: number, target: number) => {
    return Math.min((current / target) * 100, 100);
  };

  return (
    <div className="min-h-screen">
      <Header title="Metas" description="Acompanhe e gerencie suas metas pessoais de forma inteligente" />

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
                className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500"
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 360],
                }}
                transition={{
                  scale: { duration: 2, repeat: Infinity },
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                }}
              >
                <Target className="w-8 h-8 text-white" />
              </motion.div>
              <div>
                <h2 className="text-2xl font-bold">Minhas Metas</h2>
                <p className="text-muted-foreground">
                  <AnimatedCounter from={0} to={goals.length} duration={1} /> metas ativas
                </p>
              </div>
            </div>

            <motion.button
              onClick={() => setShowForm(!showForm)}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-medium hover:shadow-lg hover:shadow-primary/50 transition-shadow flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Plus className="w-5 h-5" />
              Nova Meta
            </motion.button>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid gap-4 md:grid-cols-3">
          <StatCard
            title="Metas Concluídas"
            value={<AnimatedCounter from={0} to={0} duration={1.5} />}
            description="0% das metas totais"
            icon={Target}
            gradient="from-green-500 to-emerald-500"
            delay={0}
          />
          <StatCard
            title="Em Progresso"
            value={<AnimatedCounter from={0} to={0} duration={1.5} />}
            description="Metas em andamento"
            icon={TrendingUp}
            gradient="from-blue-500 to-cyan-500"
            delay={0.1}
          />
          <StatCard
            title="Próximas do Prazo"
            value={<AnimatedCounter from={0} to={0} duration={1.5} />}
            description="Vencem em 30 dias"
            icon={Calendar}
            gradient="from-yellow-500 to-orange-500"
            delay={0.2}
          />
        </div>

        {/* Goals List */}
        {goals.length === 0 ? (
          <GlassCard delay={0.3}>
            <div className="flex flex-col items-center justify-center py-16">
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 mb-6">
                  <Target className="w-16 h-16 text-primary" />
                </div>
              </motion.div>

              <h3 className="text-2xl font-bold mb-2">Nenhuma meta criada</h3>
              <p className="text-muted-foreground text-center mb-6 max-w-md">
                Defina suas metas e acompanhe seu progresso de forma visual e inteligente
              </p>

              <motion.button
                onClick={() => setShowForm(true)}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-medium hover:shadow-lg hover:shadow-primary/50 transition-shadow flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Plus className="w-5 h-5" />
                Criar Primeira Meta
              </motion.button>
            </div>
          </GlassCard>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {goals.map((goal: any, index: number) => {
              const progress = calculateProgress(
                goal.current_value,
                goal.target_value
              );

              return (
                <GlassCard key={goal.id} delay={0.3 + index * 0.1}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-1">{goal.title}</h3>
                      {goal.description && (
                        <p className="text-sm text-muted-foreground">
                          {goal.description}
                        </p>
                      )}
                    </div>
                    <span
                      className={`text-xs px-3 py-1 rounded-full font-medium ${
                        goal.priority === "high"
                          ? "bg-red-500/20 text-red-500"
                          : goal.priority === "medium"
                          ? "bg-yellow-500/20 text-yellow-500"
                          : "bg-blue-500/20 text-blue-500"
                      }`}
                    >
                      {goal.priority}
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-muted-foreground">Progresso</span>
                        <span className="font-bold text-primary">
                          {progress.toFixed(0)}%
                        </span>
                      </div>
                      <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${progress}%` }}
                          transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                        />
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-xs text-muted-foreground">Atual</p>
                        <p className="text-lg font-bold text-green-500">
                          {formatCurrency(goal.current_value)}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-muted-foreground">Meta</p>
                        <p className="text-lg font-bold">
                          {formatCurrency(goal.target_value)}
                        </p>
                      </div>
                    </div>

                    {goal.deadline && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground pt-3 border-t border-border/30">
                        <Calendar className="w-4 h-4" />
                        <span>Prazo: {formatDate(goal.deadline)}</span>
                      </div>
                    )}
                  </div>
                </GlassCard>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

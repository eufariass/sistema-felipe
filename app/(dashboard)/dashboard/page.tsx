"use client";

import { Header } from "@/components/layout/header";
import { StatCard } from "@/components/modern/stat-card";
import { GlassCard } from "@/components/modern/glass-card";
import { AnimatedCounter } from "@/components/modern/animated-counter";
import { motion } from "framer-motion";
import {
  Wallet,
  TrendingUp,
  TrendingDown,
  Target,
  CheckSquare,
  AlertCircle,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  Sparkles,
} from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="min-h-screen">
      <Header
        title="Dashboard"
        description="Visão geral do seu sistema financeiro e produtividade"
      />

      <div className="p-6 space-y-6">
        {/* Animated Welcome Banner */}
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
          <div className="relative z-10 flex items-center gap-4">
            <motion.div
              animate={{
                rotate: [0, 10, -10, 10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 5,
              }}
            >
              <Sparkles className="w-12 h-12 text-primary pulse-glow" />
            </motion.div>
            <div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                Bem-vindo de volta!
              </h2>
              <p className="text-muted-foreground">
                Aqui está um resumo da sua situação financeira e tarefas
              </p>
            </div>
          </div>
        </motion.div>

        {/* Financial Summary Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Saldo Total"
            value={<AnimatedCounter from={0} to={12350} duration={2} prefix="R$ " decimals={2} />}
            description="+20.1% em relação ao mês passado"
            icon={Wallet}
            trend={{ value: 20.1, isPositive: true }}
            gradient="from-purple-500 to-pink-500"
            delay={0}
          />
          <StatCard
            title="Receitas (mês)"
            value={<AnimatedCounter from={0} to={8500} duration={2} prefix="R$ " decimals={2} />}
            description="+12% em relação ao mês passado"
            icon={TrendingUp}
            trend={{ value: 12, isPositive: true }}
            gradient="from-green-500 to-emerald-500"
            delay={0.1}
          />
          <StatCard
            title="Despesas (mês)"
            value={<AnimatedCounter from={0} to={3240} duration={2} prefix="R$ " decimals={2} />}
            description="-5% em relação ao mês passado"
            icon={TrendingDown}
            trend={{ value: 5, isPositive: true }}
            gradient="from-red-500 to-orange-500"
            delay={0.2}
          />
          <StatCard
            title="Economia (mês)"
            value={<AnimatedCounter from={0} to={5260} duration={2} prefix="R$ " decimals={2} />}
            description="62% do total de receitas"
            icon={Target}
            gradient="from-blue-500 to-cyan-500"
            delay={0.3}
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
          {/* Recent Transactions */}
          <GlassCard className="col-span-4" delay={0.4}>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold">Transações Recentes</h3>
                <p className="text-sm text-muted-foreground">
                  Suas últimas movimentações financeiras
                </p>
              </div>
              <motion.button
                className="text-sm text-primary hover:text-primary/80 flex items-center gap-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Ver todas
                <ArrowUpRight className="w-4 h-4" />
              </motion.button>
            </div>

            <div className="space-y-4">
              {[
                { name: "Salário", date: "01/01/2026", amount: 8500, type: "income" },
                { name: "Supermercado", date: "05/01/2026", amount: -450, type: "expense" },
                { name: "Gasolina", date: "07/01/2026", amount: -200, type: "expense" },
                { name: "Freelance", date: "08/01/2026", amount: 1500, type: "income" },
              ].map((transaction, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-lg ${
                        transaction.type === "income"
                          ? "bg-green-500/20 text-green-500"
                          : "bg-red-500/20 text-red-500"
                      }`}
                    >
                      {transaction.type === "income" ? (
                        <ArrowUpRight className="w-4 h-4" />
                      ) : (
                        <ArrowDownRight className="w-4 h-4" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium group-hover:text-primary transition-colors">
                        {transaction.name}
                      </p>
                      <p className="text-sm text-muted-foreground flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {transaction.date}
                      </p>
                    </div>
                  </div>
                  <div
                    className={`text-lg font-bold ${
                      transaction.type === "income" ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {transaction.amount > 0 ? "+" : ""}R${" "}
                    {Math.abs(transaction.amount).toLocaleString("pt-BR", {
                      minimumFractionDigits: 2,
                    })}
                  </div>
                </motion.div>
              ))}
            </div>
          </GlassCard>

          {/* Tasks and Goals */}
          <GlassCard className="col-span-3" delay={0.5}>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold">Tarefas & Metas</h3>
                <p className="text-sm text-muted-foreground">5 tarefas pendentes</p>
              </div>
              <motion.div
                className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                5
              </motion.div>
            </div>

            <div className="space-y-4">
              {[
                {
                  title: "Revisar orçamento mensal",
                  subtitle: "Alta prioridade",
                  icon: CheckSquare,
                  color: "text-blue-500",
                  bg: "bg-blue-500/20",
                },
                {
                  title: "Pagar conta de luz",
                  subtitle: "Vence hoje",
                  icon: CheckSquare,
                  color: "text-green-500",
                  bg: "bg-green-500/20",
                },
                {
                  title: "Meta: Economizar R$ 10.000",
                  subtitle: "52% concluída",
                  icon: Target,
                  color: "text-purple-500",
                  bg: "bg-purple-500/20",
                  progress: 52,
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="p-3 rounded-lg hover:bg-white/5 transition-colors group"
                >
                  <div className="flex items-start gap-3">
                    <div className={`p-2 rounded-lg ${item.bg} ${item.color}`}>
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium group-hover:text-primary transition-colors">
                        {item.title}
                      </p>
                      <p className="text-xs text-muted-foreground">{item.subtitle}</p>
                      {item.progress && (
                        <div className="mt-2">
                          <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                              className={`h-full ${item.bg.replace("/20", "")} rounded-full`}
                              initial={{ width: 0 }}
                              animate={{ width: `${item.progress}%` }}
                              transition={{ delay: 0.8 + index * 0.1, duration: 1 }}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </div>

        {/* Alerts */}
        <GlassCard delay={0.6}>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-yellow-500/20">
              <AlertCircle className="w-6 h-6 text-yellow-500" />
            </div>
            <h3 className="text-xl font-bold">Alertas Importantes</h3>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
              className="relative rounded-xl p-4 border-2 border-yellow-500/30 bg-gradient-to-br from-yellow-500/10 to-transparent overflow-hidden group hover:border-yellow-500/50 transition-colors"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 rounded-full blur-2xl group-hover:bg-yellow-500/20 transition-colors" />
              <div className="relative z-10">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-yellow-100 mb-1">
                      Orçamento de Alimentação próximo do limite
                    </p>
                    <p className="text-sm text-yellow-300/80">
                      Você gastou R$ 850 de R$ 1.000 este mês (85%)
                    </p>
                    <div className="mt-3 h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-yellow-500 to-orange-500"
                        initial={{ width: 0 }}
                        animate={{ width: "85%" }}
                        transition={{ delay: 0.9, duration: 1 }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              className="relative rounded-xl p-4 border-2 border-blue-500/30 bg-gradient-to-br from-blue-500/10 to-transparent overflow-hidden group hover:border-blue-500/50 transition-colors"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-colors" />
              <div className="relative z-10">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-blue-100 mb-1">
                      3 contas vencem esta semana
                    </p>
                    <p className="text-sm text-blue-300/80">
                      Total de R$ 320,00 a pagar
                    </p>
                    <motion.button
                      className="mt-3 text-sm text-blue-400 hover:text-blue-300 flex items-center gap-1"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Ver detalhes
                      <ArrowUpRight className="w-3 h-3" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}

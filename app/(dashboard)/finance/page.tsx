"use client";

import { Header } from "@/components/layout/header";
import { GlassCard } from "@/components/modern/glass-card";
import { AnimatedCounter } from "@/components/modern/animated-counter";
import { motion } from "framer-motion";
import { Plus, Wallet, Tag, CreditCard, PieChart, TrendingUp, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const quickActions = [
  {
    title: "Nova Transação",
    description: "Adicionar receita ou despesa",
    icon: Plus,
    href: "/finance/transactions?action=new",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Contas",
    description: "Gerenciar contas bancárias",
    icon: Wallet,
    href: "/finance/accounts",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    title: "Categorias",
    description: "Organizar categorias",
    icon: Tag,
    href: "/finance/categories",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Orçamentos",
    description: "Definir limites de gastos",
    icon: PieChart,
    href: "/finance/budgets",
    gradient: "from-orange-500 to-red-500",
  },
];

const modules = [
  {
    title: "Transações",
    description: "Visualize e gerencie todas as suas movimentações financeiras",
    icon: CreditCard,
    href: "/finance/transactions",
    gradient: "from-violet-500 to-purple-500",
    stats: { total: 0, label: "transações este mês" },
  },
  {
    title: "Relatórios",
    description: "Analise seus gastos e receitas com gráficos e relatórios",
    icon: PieChart,
    href: "/finance/reports",
    gradient: "from-cyan-500 to-blue-500",
    stats: { total: 0, label: "relatórios gerados" },
  },
];

const overviewCards = [
  {
    title: "Contas Cadastradas",
    count: 0,
    emptyMessage: "Nenhuma conta cadastrada ainda",
    actionText: "Adicionar Conta",
    href: "/finance/accounts",
    icon: Wallet,
    gradient: "from-green-500 to-emerald-500",
  },
  {
    title: "Categorias",
    count: 0,
    emptyMessage: "Nenhuma categoria cadastrada",
    actionText: "Adicionar Categoria",
    href: "/finance/categories",
    icon: Tag,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Transações do Mês",
    count: 0,
    emptyMessage: "Nenhuma transação este mês",
    actionText: "Adicionar Transação",
    href: "/finance/transactions",
    icon: TrendingUp,
    gradient: "from-purple-500 to-pink-500",
  },
];

export default function FinancePage() {
  return (
    <div className="min-h-screen">
      <Header
        title="Finanças"
        description="Gerencie suas finanças pessoais de forma inteligente"
      />

      <div className="p-6 space-y-6">
        {/* Quick Actions */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {quickActions.map((action, index) => {
            const Icon = action.icon;
            return (
              <motion.div
                key={action.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={action.href}>
                  <div className="glass rounded-xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-300 group relative overflow-hidden cursor-pointer">
                    {/* Gradient background on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${action.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                    {/* Floating orb */}
                    <motion.div
                      className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${action.gradient} rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity`}
                      animate={{
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                      }}
                    />

                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-3">
                        <motion.div
                          className={`p-3 rounded-lg bg-gradient-to-br ${action.gradient}`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </motion.div>
                        <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                      <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">
                        {action.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {action.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Main Modules */}
        <div className="grid gap-6 md:grid-cols-2">
          {modules.map((module, index) => {
            const Icon = module.icon;
            return (
              <GlassCard key={module.href} delay={0.4 + index * 0.1}>
                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${module.gradient}`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{module.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {module.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-6">
                    <div>
                      <div className="text-3xl font-bold">
                        <AnimatedCounter from={0} to={module.stats.total} duration={1.5} />
                      </div>
                      <p className="text-sm text-muted-foreground">{module.stats.label}</p>
                    </div>

                    <Link href={module.href}>
                      <motion.button
                        className={`px-6 py-3 rounded-xl bg-gradient-to-r ${module.gradient} text-white font-medium hover:shadow-lg hover:shadow-primary/50 transition-shadow`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Ver {module.title}
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </GlassCard>
            );
          })}
        </div>

        {/* Overview Cards */}
        <div className="grid gap-4 md:grid-cols-3">
          {overviewCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <GlassCard key={card.href} delay={0.6 + index * 0.1}>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${card.gradient}`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold">{card.title}</h3>
                </div>

                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  <AnimatedCounter from={0} to={card.count} duration={1.5} />
                </div>

                <p className="text-sm text-muted-foreground mb-4">
                  {card.emptyMessage}
                </p>

                <Link href={card.href}>
                  <motion.button
                    className="w-full px-4 py-2 rounded-lg glass border border-border/50 hover:border-primary/50 text-sm font-medium hover:text-primary transition-all"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {card.actionText}
                  </motion.button>
                </Link>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { Header } from "@/components/layout/header";
import { GlassCard } from "@/components/modern/glass-card";
import { AnimatedCounter } from "@/components/modern/animated-counter";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, Wallet, Edit, Trash2, X, TrendingUp, TrendingDown, Sparkles } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

const accountTypes = [
  { value: "checking", label: "Conta Corrente", gradient: "from-blue-500 to-cyan-500" },
  { value: "savings", label: "Poupança", gradient: "from-green-500 to-emerald-500" },
  { value: "investment", label: "Investimento", gradient: "from-purple-500 to-pink-500" },
  { value: "cash", label: "Dinheiro", gradient: "from-yellow-500 to-orange-500" },
  { value: "credit", label: "Cartão de Crédito", gradient: "from-red-500 to-orange-500" },
];

export default function AccountsPage() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    type: "checking",
    initial_balance: "0",
    color: "#3B82F6",
    icon: "wallet",
  });

  const accounts: any[] = []; // This will be fetched from Supabase

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Creating account:", formData);
    setShowForm(false);
  };

  const getAccountTypeGradient = (type: string) => {
    return accountTypes.find((t) => t.value === type)?.gradient || "from-blue-500 to-cyan-500";
  };

  return (
    <div className="min-h-screen">
      <Header title="Contas" description="Gerencie suas contas bancárias e carteiras de forma inteligente" />

      <div className="p-6 space-y-6">
        {/* Summary Header */}
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
                className="p-3 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                <Wallet className="w-8 h-8 text-white" />
              </motion.div>
              <div>
                <h2 className="text-2xl font-bold">Minhas Contas</h2>
                <p className="text-muted-foreground">
                  Total em contas:{" "}
                  <span className="text-primary font-semibold">
                    {formatCurrency(0)}
                  </span>
                </p>
              </div>
            </div>

            <motion.button
              onClick={() => setShowForm(!showForm)}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-medium hover:shadow-lg hover:shadow-primary/50 transition-shadow flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {showForm ? (
                <>
                  <X className="w-5 h-5" />
                  Cancelar
                </>
              ) : (
                <>
                  <Plus className="w-5 h-5" />
                  Nova Conta
                </>
              )}
            </motion.button>
          </div>
        </motion.div>

        {/* Add Account Form */}
        <AnimatePresence>
          {showForm && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <GlassCard delay={0}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-secondary">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">Adicionar Nova Conta</h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium">
                        Nome da Conta
                      </Label>
                      <Input
                        id="name"
                        placeholder="Ex: Banco Inter"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="glass border-border/50"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="type" className="text-sm font-medium">
                        Tipo de Conta
                      </Label>
                      <select
                        id="type"
                        value={formData.type}
                        onChange={(e) =>
                          setFormData({ ...formData, type: e.target.value })
                        }
                        className="w-full px-4 py-2 rounded-lg glass border border-border/50 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        {accountTypes.map((type) => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="balance" className="text-sm font-medium">
                        Saldo Inicial
                      </Label>
                      <Input
                        id="balance"
                        type="number"
                        step="0.01"
                        placeholder="0.00"
                        value={formData.initial_balance}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            initial_balance: e.target.value,
                          })
                        }
                        className="glass border-border/50"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="color" className="text-sm font-medium">
                        Cor Personalizada
                      </Label>
                      <div className="flex gap-2">
                        <Input
                          id="color"
                          type="color"
                          value={formData.color}
                          onChange={(e) =>
                            setFormData({ ...formData, color: e.target.value })
                          }
                          className="w-20 h-10 glass border-border/50 cursor-pointer"
                        />
                        <div
                          className="flex-1 h-10 rounded-lg border border-border/50"
                          style={{ backgroundColor: formData.color }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <motion.button
                      type="submit"
                      className="px-6 py-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 text-white font-medium hover:shadow-lg hover:shadow-green-500/50 transition-shadow"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Salvar Conta
                    </motion.button>
                    <motion.button
                      type="button"
                      onClick={() => setShowForm(false)}
                      className="px-6 py-3 rounded-xl glass border border-border/50 hover:border-primary/50 text-foreground font-medium transition-all"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Cancelar
                    </motion.button>
                  </div>
                </form>
              </GlassCard>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Accounts List */}
        {accounts.length === 0 ? (
          <GlassCard delay={0.2}>
            <div className="flex flex-col items-center justify-center py-12">
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
                  <Wallet className="w-16 h-16 text-primary" />
                </div>
              </motion.div>

              <h3 className="text-2xl font-bold mb-2">Nenhuma conta cadastrada</h3>
              <p className="text-muted-foreground text-center mb-6 max-w-md">
                Adicione sua primeira conta para começar a controlar suas finanças de forma inteligente
              </p>

              <motion.button
                onClick={() => setShowForm(true)}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-medium hover:shadow-lg hover:shadow-primary/50 transition-shadow flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Plus className="w-5 h-5" />
                Adicionar Primeira Conta
              </motion.button>
            </div>
          </GlassCard>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {accounts.map((account: any, index: number) => (
              <GlassCard key={account.id} delay={0.2 + index * 0.1}>
                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-3 rounded-xl bg-gradient-to-br ${getAccountTypeGradient(
                          account.type
                        )}`}
                      >
                        <Wallet className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{account.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {accountTypes.find((t) => t.value === account.type)?.label}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-1">
                      <motion.button
                        className="p-2 rounded-lg glass hover:bg-primary/10 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Edit className="w-4 h-4 text-primary" />
                      </motion.button>
                      <motion.button
                        className="p-2 rounded-lg glass hover:bg-destructive/10 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Trash2 className="w-4 h-4 text-destructive" />
                      </motion.button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      {formatCurrency(account.balance)}
                    </div>

                    {account.trend && (
                      <div
                        className={`flex items-center gap-1 text-sm ${
                          account.trend > 0 ? "text-green-500" : "text-red-500"
                        }`}
                      >
                        {account.trend > 0 ? (
                          <TrendingUp className="w-4 h-4" />
                        ) : (
                          <TrendingDown className="w-4 h-4" />
                        )}
                        <span>
                          {Math.abs(account.trend)}% este mês
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

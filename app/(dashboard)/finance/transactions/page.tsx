"use client";

import { useState } from "react";
import { Header } from "@/components/layout/header";
import { GlassCard } from "@/components/modern/glass-card";
import { motion } from "framer-motion";
import { Plus, ArrowUpCircle, ArrowDownCircle, Filter, Clock, Tag, Sparkles } from "lucide-react";
import { formatCurrency, formatDate } from "@/lib/utils";

export default function TransactionsPage() {
  const [showFilters, setShowFilters] = useState(false);

  const transactions: any[] = []; // Will be fetched from Supabase

  return (
    <div className="min-h-screen">
      <Header title="Transações" description="Histórico completo de movimentações financeiras" />

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
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                <Sparkles className="w-8 h-8 text-white" />
              </motion.div>
              <div>
                <h2 className="text-2xl font-bold">Todas as Transações</h2>
                <p className="text-muted-foreground">
                  Histórico completo de movimentações
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <motion.button
                onClick={() => setShowFilters(!showFilters)}
                className={`px-6 py-3 rounded-xl glass border border-border/50 ${
                  showFilters ? "border-primary/50 text-primary" : ""
                } font-medium hover:border-primary/50 transition-all flex items-center gap-2`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Filter className="w-5 h-5" />
                Filtros
              </motion.button>

              <motion.button
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-medium hover:shadow-lg hover:shadow-primary/50 transition-shadow flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Plus className="w-5 h-5" />
                Nova Transação
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Empty State or Transactions List */}
        {transactions.length === 0 ? (
          <GlassCard delay={0.2}>
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
                  <ArrowUpCircle className="w-16 h-16 text-primary" />
                </div>
              </motion.div>

              <h3 className="text-2xl font-bold mb-2">Nenhuma transação registrada</h3>
              <p className="text-muted-foreground text-center mb-6 max-w-md">
                Comece adicionando sua primeira transação para acompanhar suas finanças
              </p>

              <motion.button
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-medium hover:shadow-lg hover:shadow-primary/50 transition-shadow flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Plus className="w-5 h-5" />
                Adicionar Primeira Transação
              </motion.button>
            </div>
          </GlassCard>
        ) : (
          <GlassCard delay={0.2}>
            <div className="space-y-2">
              {transactions.map((transaction: any, index: number) => (
                <motion.div
                  key={transaction.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-center justify-between p-4 rounded-xl hover:bg-white/5 transition-colors group cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <motion.div
                      className={`p-3 rounded-xl ${
                        transaction.type === "income"
                          ? "bg-green-500/20"
                          : "bg-red-500/20"
                      }`}
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      {transaction.type === "income" ? (
                        <ArrowUpCircle className="w-6 h-6 text-green-500" />
                      ) : (
                        <ArrowDownCircle className="w-6 h-6 text-red-500" />
                      )}
                    </motion.div>

                    <div>
                      <p className="font-semibold group-hover:text-primary transition-colors">
                        {transaction.description}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                        <Clock className="w-3 h-3" />
                        <span>{formatDate(transaction.date)}</span>
                        {transaction.category && (
                          <>
                            <span>•</span>
                            <Tag className="w-3 h-3" />
                            <span>{transaction.category.name}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="text-right flex items-center gap-4">
                    <div>
                      <p
                        className={`text-xl font-bold ${
                          transaction.type === "income"
                            ? "text-green-500"
                            : "text-red-500"
                        }`}
                      >
                        {transaction.type === "income" ? "+" : "-"}
                        {formatCurrency(transaction.amount)}
                      </p>
                      {transaction.status && (
                        <div className="mt-1 flex justify-end">
                          <span
                            className={`text-xs px-2 py-1 rounded-full ${
                              transaction.status === "completed"
                                ? "bg-green-500/20 text-green-500"
                                : transaction.status === "pending"
                                ? "bg-yellow-500/20 text-yellow-500"
                                : "bg-red-500/20 text-red-500"
                            }`}
                          >
                            {transaction.status}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </GlassCard>
        )}
      </div>
    </div>
  );
}

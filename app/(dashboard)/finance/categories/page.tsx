"use client";

import { useState } from "react";
import { Header } from "@/components/layout/header";
import { GlassCard } from "@/components/modern/glass-card";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, Tag, TrendingUp, TrendingDown, X, Edit, Trash2, Sparkles } from "lucide-react";

export default function CategoriesPage() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    type: "expense" as "income" | "expense",
    color: "#EF4444",
    icon: "tag",
  });

  const categories: any[] = []; // Will be fetched from Supabase

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Creating category:", formData);
    setShowForm(false);
  };

  return (
    <div className="min-h-screen">
      <Header title="Categorias" description="Organize suas transações em categorias personalizadas" />

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
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              >
                <Tag className="w-8 h-8 text-white" />
              </motion.div>
              <div>
                <h2 className="text-2xl font-bold">Minhas Categorias</h2>
                <p className="text-muted-foreground">
                  Organize e gerencie suas categorias
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
                  Nova Categoria
                </>
              )}
            </motion.button>
          </div>
        </motion.div>

        {/* Add Category Form */}
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
                  <h3 className="text-xl font-bold">Adicionar Nova Categoria</h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-3">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium">
                        Nome da Categoria
                      </Label>
                      <Input
                        id="name"
                        placeholder="Ex: Alimentação"
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
                        Tipo
                      </Label>
                      <select
                        id="type"
                        value={formData.type}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            type: e.target.value as "income" | "expense",
                          })
                        }
                        className="w-full px-4 py-2 rounded-lg glass border border-border/50 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="expense">Despesa</option>
                        <option value="income">Receita</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="color" className="text-sm font-medium">
                        Cor
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
                      Salvar Categoria
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

        {/* Categories Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Expense Categories */}
          <GlassCard delay={0.2}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-br from-red-500 to-orange-500">
                <TrendingDown className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Despesas</h3>
                <p className="text-sm text-muted-foreground">
                  Categorias de saída
                </p>
              </div>
            </div>

            {categories.filter((c: any) => c.type === "expense").length === 0 ? (
              <div className="text-center py-12">
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
                  <div className="p-4 rounded-xl bg-red-500/10 inline-block mb-4">
                    <Tag className="w-12 h-12 text-red-500" />
                  </div>
                </motion.div>
                <p className="text-muted-foreground">Nenhuma categoria de despesa</p>
                <motion.button
                  onClick={() => {
                    setFormData({ ...formData, type: "expense" });
                    setShowForm(true);
                  }}
                  className="mt-4 px-4 py-2 rounded-lg glass border border-border/50 hover:border-red-500/50 text-sm font-medium hover:text-red-500 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Adicionar Primeira
                </motion.button>
              </div>
            ) : (
              <div className="space-y-3">
                {categories
                  .filter((c: any) => c.type === "expense")
                  .map((category: any, index: number) => (
                    <motion.div
                      key={category.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center justify-between p-4 rounded-xl glass hover:bg-white/5 transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center"
                          style={{ backgroundColor: category.color + "30" }}
                        >
                          <Tag
                            className="w-5 h-5"
                            style={{ color: category.color }}
                          />
                        </div>
                        <span className="font-medium group-hover:text-primary transition-colors">
                          {category.name}
                        </span>
                      </div>

                      <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
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
                    </motion.div>
                  ))}
              </div>
            )}
          </GlassCard>

          {/* Income Categories */}
          <GlassCard delay={0.3}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Receitas</h3>
                <p className="text-sm text-muted-foreground">
                  Categorias de entrada
                </p>
              </div>
            </div>

            {categories.filter((c: any) => c.type === "income").length === 0 ? (
              <div className="text-center py-12">
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
                  <div className="p-4 rounded-xl bg-green-500/10 inline-block mb-4">
                    <Tag className="w-12 h-12 text-green-500" />
                  </div>
                </motion.div>
                <p className="text-muted-foreground">Nenhuma categoria de receita</p>
                <motion.button
                  onClick={() => {
                    setFormData({ ...formData, type: "income" });
                    setShowForm(true);
                  }}
                  className="mt-4 px-4 py-2 rounded-lg glass border border-border/50 hover:border-green-500/50 text-sm font-medium hover:text-green-500 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Adicionar Primeira
                </motion.button>
              </div>
            ) : (
              <div className="space-y-3">
                {categories
                  .filter((c: any) => c.type === "income")
                  .map((category: any, index: number) => (
                    <motion.div
                      key={category.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center justify-between p-4 rounded-xl glass hover:bg-white/5 transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center"
                          style={{ backgroundColor: category.color + "30" }}
                        >
                          <Tag
                            className="w-5 h-5"
                            style={{ color: category.color }}
                          />
                        </div>
                        <span className="font-medium group-hover:text-primary transition-colors">
                          {category.name}
                        </span>
                      </div>

                      <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
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
                    </motion.div>
                  ))}
              </div>
            )}
          </GlassCard>
        </div>
      </div>
    </div>
  );
}

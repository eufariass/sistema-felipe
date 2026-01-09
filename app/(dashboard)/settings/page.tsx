"use client";

import { Header } from "@/components/layout/header";
import { GlassCard } from "@/components/modern/glass-card";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, Palette, Bell, Database, Sparkles, Save, Download, Upload, Trash2 } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="min-h-screen">
      <Header title="Configurações" description="Gerencie suas preferências e personalize o sistema" />

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

          <div className="relative z-10 flex items-center gap-4">
            <motion.div
              className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <Sparkles className="w-8 h-8 text-white" />
            </motion.div>
            <div>
              <h2 className="text-2xl font-bold">Configurações do Sistema</h2>
              <p className="text-muted-foreground">
                Personalize sua experiência
              </p>
            </div>
          </div>
        </motion.div>

        {/* Profile Settings */}
        <GlassCard delay={0.1}>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500">
              <User className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Perfil</h3>
              <p className="text-sm text-muted-foreground">
                Atualize suas informações pessoais
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-sm font-medium">
                  Nome Completo
                </Label>
                <Input
                  id="fullName"
                  placeholder="Seu nome"
                  className="glass border-border/50"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  disabled
                  className="glass border-border/50 opacity-60"
                />
              </div>
            </div>

            <motion.button
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 text-white font-medium hover:shadow-lg hover:shadow-green-500/50 transition-shadow flex items-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Save className="w-5 h-5" />
              Salvar Alterações
            </motion.button>
          </div>
        </GlassCard>

        {/* Appearance Settings */}
        <GlassCard delay={0.2}>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500">
              <Palette className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Aparência</h3>
              <p className="text-sm text-muted-foreground">
                Personalize a aparência do sistema
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="theme" className="text-sm font-medium">
                  Tema
                </Label>
                <select
                  id="theme"
                  defaultValue="dark"
                  className="w-full px-4 py-2 rounded-lg glass border border-border/50 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="light">Claro</option>
                  <option value="dark">Escuro</option>
                  <option value="system">Sistema</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="currency" className="text-sm font-medium">
                  Moeda
                </Label>
                <select
                  id="currency"
                  defaultValue="BRL"
                  className="w-full px-4 py-2 rounded-lg glass border border-border/50 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="BRL">Real (R$)</option>
                  <option value="USD">Dólar (US$)</option>
                  <option value="EUR">Euro (€)</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="dateFormat" className="text-sm font-medium">
                  Formato de Data
                </Label>
                <select
                  id="dateFormat"
                  defaultValue="dd/MM/yyyy"
                  className="w-full px-4 py-2 rounded-lg glass border border-border/50 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="dd/MM/yyyy">DD/MM/AAAA</option>
                  <option value="MM/dd/yyyy">MM/DD/AAAA</option>
                  <option value="yyyy-MM-dd">AAAA-MM-DD</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="firstDay" className="text-sm font-medium">
                  Primeiro Dia da Semana
                </Label>
                <select
                  id="firstDay"
                  defaultValue="0"
                  className="w-full px-4 py-2 rounded-lg glass border border-border/50 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="0">Domingo</option>
                  <option value="1">Segunda</option>
                </select>
              </div>
            </div>

            <motion.button
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-shadow flex items-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Save className="w-5 h-5" />
              Salvar Preferências
            </motion.button>
          </div>
        </GlassCard>

        {/* Notifications */}
        <GlassCard delay={0.3}>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500">
              <Bell className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Notificações</h3>
              <p className="text-sm text-muted-foreground">
                Configure quando receber notificações
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {[
              {
                title: "Contas a Vencer",
                description: "Receba alertas sobre contas próximas do vencimento",
                defaultChecked: true,
              },
              {
                title: "Orçamento Excedido",
                description: "Alertas quando ultrapassar limites de orçamento",
                defaultChecked: true,
              },
              {
                title: "Metas Próximas do Prazo",
                description: "Lembretes sobre metas com prazo próximo",
                defaultChecked: true,
              },
            ].map((notification, index) => (
              <motion.div
                key={notification.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="flex items-center justify-between p-4 rounded-xl glass hover:bg-white/5 transition-colors"
              >
                <div>
                  <p className="font-medium">{notification.title}</p>
                  <p className="text-sm text-muted-foreground">
                    {notification.description}
                  </p>
                </div>
                <motion.input
                  type="checkbox"
                  defaultChecked={notification.defaultChecked}
                  className="w-5 h-5 rounded cursor-pointer accent-primary"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                />
              </motion.div>
            ))}

            <motion.button
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-medium hover:shadow-lg hover:shadow-yellow-500/50 transition-shadow flex items-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Save className="w-5 h-5" />
              Salvar Notificações
            </motion.button>
          </div>
        </GlassCard>

        {/* Data Management */}
        <GlassCard delay={0.4}>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500">
              <Database className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Gerenciamento de Dados</h3>
              <p className="text-sm text-muted-foreground">
                Exporte ou importe seus dados
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex flex-wrap gap-3">
              <motion.button
                className="px-6 py-3 rounded-xl glass border border-border/50 hover:border-primary/50 font-medium hover:text-primary transition-all flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download className="w-5 h-5" />
                Exportar Dados (CSV)
              </motion.button>

              <motion.button
                className="px-6 py-3 rounded-xl glass border border-border/50 hover:border-primary/50 font-medium hover:text-primary transition-all flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Upload className="w-5 h-5" />
                Importar Dados (CSV)
              </motion.button>
            </div>

            <div className="border-t border-border/30 pt-6">
              <div className="mb-4">
                <p className="text-sm font-medium text-red-500 mb-2">Zona de Perigo</p>
                <p className="text-sm text-muted-foreground">
                  Esta ação não pode ser desfeita. Todos os seus dados serão permanentemente removidos.
                </p>
              </div>

              <motion.button
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 to-red-700 text-white font-medium hover:shadow-lg hover:shadow-red-500/50 transition-shadow flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Trash2 className="w-5 h-5" />
                Deletar Todos os Dados
              </motion.button>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}

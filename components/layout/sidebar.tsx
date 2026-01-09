"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Wallet,
  Target,
  CheckSquare,
  Settings,
  LogOut,
  Sparkles,
} from "lucide-react";
import { supabase } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

const navItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Finanças",
    href: "/finance",
    icon: Wallet,
    gradient: "from-green-500 to-emerald-500",
  },
  {
    title: "Metas",
    href: "/goals",
    icon: Target,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Tarefas",
    href: "/tasks",
    icon: CheckSquare,
    gradient: "from-orange-500 to-red-500",
  },
  {
    title: "Configurações",
    href: "/settings",
    icon: Settings,
    gradient: "from-gray-500 to-slate-500",
  },
];

export function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/auth/login");
    router.refresh();
  };

  return (
    <div className="flex h-full w-64 flex-col glass border-r border-border/50">
      {/* Logo Section */}
      <motion.div
        className="p-6 border-b border-border/50"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-3 mb-2">
          <motion.div
            animate={{
              rotate: [0, 10, -10, 10, 0],
              scale: [1, 1.1, 1, 1.1, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: 5,
            }}
          >
            <Sparkles className="w-8 h-8 text-primary pulse-glow" />
          </motion.div>
          <div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Sistema Felipe
            </h1>
            <p className="text-xs text-muted-foreground">Gestão Inteligente</p>
          </div>
        </div>
      </motion.div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2 px-3 py-4">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = pathname === item.href || pathname?.startsWith(item.href + "/");

          return (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={item.href}
                className={cn(
                  "relative flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 group overflow-hidden",
                  isActive
                    ? "text-white"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {/* Animated background for active item */}
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className={cn(
                      "absolute inset-0 bg-gradient-to-r opacity-90",
                      item.gradient
                    )}
                    style={{ borderRadius: "12px" }}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                    }}
                  />
                )}

                {/* Hover background */}
                {!isActive && (
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
                )}

                {/* Icon with animation */}
                <motion.div
                  className="relative z-10"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className={cn(
                    "h-5 w-5 transition-all",
                    isActive && "drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
                  )} />
                </motion.div>

                {/* Title */}
                <span className="relative z-10">{item.title}</span>

                {/* Glow effect on active */}
                {isActive && (
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 blur-xl rounded-xl"
                    animate={{
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                )}
              </Link>
            </motion.div>
          );
        })}
      </nav>

      {/* Logout Section */}
      <motion.div
        className="border-t border-border/50 p-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <motion.button
          onClick={handleLogout}
          className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground transition-all duration-300 hover:text-destructive hover:bg-destructive/10 group relative overflow-hidden"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          <motion.div
            className="relative z-10"
            animate={{
              rotate: [0, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3,
            }}
          >
            <LogOut className="h-5 w-5" />
          </motion.div>
          <span className="relative z-10">Sair</span>
        </motion.button>
      </motion.div>
    </div>
  );
}

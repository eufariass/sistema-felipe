import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sistema Felipe - Finanças, Metas e Tarefas",
  description: "Sistema completo de gerenciamento pessoal de finanças, metas e tarefas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}

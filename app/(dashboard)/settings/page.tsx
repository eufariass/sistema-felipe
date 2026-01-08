"use client";

import { Header } from "@/components/layout/header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { User, Palette, Bell, Database } from "lucide-react";

export default function SettingsPage() {
  return (
    <div>
      <Header title="Configurações" description="Gerencie suas preferências" />
      <div className="p-6 space-y-6">
        <div className="grid gap-6">
          {/* Profile Settings */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <User className="h-5 w-5" />
                <CardTitle>Perfil</CardTitle>
              </div>
              <CardDescription>
                Atualize suas informações pessoais
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Nome Completo</Label>
                  <Input id="fullName" placeholder="Seu nome" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="seu@email.com" disabled />
                </div>
              </div>
              <Button>Salvar Alterações</Button>
            </CardContent>
          </Card>

          {/* Appearance Settings */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Palette className="h-5 w-5" />
                <CardTitle>Aparência</CardTitle>
              </div>
              <CardDescription>
                Personalize a aparência do sistema
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="theme">Tema</Label>
                  <Select id="theme" defaultValue="system">
                    <option value="light">Claro</option>
                    <option value="dark">Escuro</option>
                    <option value="system">Sistema</option>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="currency">Moeda</Label>
                  <Select id="currency" defaultValue="BRL">
                    <option value="BRL">Real (R$)</option>
                    <option value="USD">Dólar (US$)</option>
                    <option value="EUR">Euro (€)</option>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dateFormat">Formato de Data</Label>
                  <Select id="dateFormat" defaultValue="dd/MM/yyyy">
                    <option value="dd/MM/yyyy">DD/MM/AAAA</option>
                    <option value="MM/dd/yyyy">MM/DD/AAAA</option>
                    <option value="yyyy-MM-dd">AAAA-MM-DD</option>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="firstDay">Primeiro Dia da Semana</Label>
                  <Select id="firstDay" defaultValue="0">
                    <option value="0">Domingo</option>
                    <option value="1">Segunda</option>
                  </Select>
                </div>
              </div>
              <Button>Salvar Preferências</Button>
            </CardContent>
          </Card>

          {/* Notifications */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                <CardTitle>Notificações</CardTitle>
              </div>
              <CardDescription>
                Configure quando receber notificações
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Contas a Vencer</p>
                  <p className="text-sm text-muted-foreground">
                    Receba alertas sobre contas próximas do vencimento
                  </p>
                </div>
                <input type="checkbox" className="h-4 w-4" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Orçamento Excedido</p>
                  <p className="text-sm text-muted-foreground">
                    Alertas quando ultrapassar limites de orçamento
                  </p>
                </div>
                <input type="checkbox" className="h-4 w-4" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Metas Próximas do Prazo</p>
                  <p className="text-sm text-muted-foreground">
                    Lembretes sobre metas com prazo próximo
                  </p>
                </div>
                <input type="checkbox" className="h-4 w-4" defaultChecked />
              </div>
              <Button>Salvar Notificações</Button>
            </CardContent>
          </Card>

          {/* Data Management */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Database className="h-5 w-5" />
                <CardTitle>Gerenciamento de Dados</CardTitle>
              </div>
              <CardDescription>
                Exporte ou importe seus dados
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Button variant="outline">Exportar Dados (CSV)</Button>
                <Button variant="outline">Importar Dados (CSV)</Button>
              </div>
              <div className="border-t pt-4">
                <p className="text-sm text-muted-foreground mb-2">
                  Zona de Perigo
                </p>
                <Button variant="destructive">Deletar Todos os Dados</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

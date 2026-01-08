"use client";

import { Header } from "@/components/layout/header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wallet, TrendingUp, TrendingDown, Target, CheckSquare, AlertCircle } from "lucide-react";

export default function DashboardPage() {
  return (
    <div>
      <Header
        title="Dashboard"
        description="Visão geral do seu sistema financeiro e produtividade"
      />
      <div className="p-6 space-y-6">
        {/* Financial Summary Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Saldo Total
              </CardTitle>
              <Wallet className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">R$ 12.350,00</div>
              <p className="text-xs text-muted-foreground">
                +20.1% em relação ao mês passado
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Receitas (mês)
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">R$ 8.500,00</div>
              <p className="text-xs text-muted-foreground">
                +12% em relação ao mês passado
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Despesas (mês)
              </CardTitle>
              <TrendingDown className="h-4 w-4 text-red-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">R$ 3.240,00</div>
              <p className="text-xs text-muted-foreground">
                -5% em relação ao mês passado
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Economia (mês)
              </CardTitle>
              <Target className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">R$ 5.260,00</div>
              <p className="text-xs text-muted-foreground">
                62% do total de receitas
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
          {/* Recent Transactions */}
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Transações Recentes</CardTitle>
              <CardDescription>
                Suas últimas movimentações financeiras
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b pb-2">
                  <div>
                    <p className="font-medium">Salário</p>
                    <p className="text-sm text-muted-foreground">01/01/2026</p>
                  </div>
                  <div className="text-green-600 font-semibold">+R$ 8.500,00</div>
                </div>
                <div className="flex items-center justify-between border-b pb-2">
                  <div>
                    <p className="font-medium">Supermercado</p>
                    <p className="text-sm text-muted-foreground">05/01/2026</p>
                  </div>
                  <div className="text-red-600 font-semibold">-R$ 450,00</div>
                </div>
                <div className="flex items-center justify-between border-b pb-2">
                  <div>
                    <p className="font-medium">Gasolina</p>
                    <p className="text-sm text-muted-foreground">07/01/2026</p>
                  </div>
                  <div className="text-red-600 font-semibold">-R$ 200,00</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tasks and Goals */}
          <Card className="col-span-3">
            <CardHeader>
              <CardTitle>Tarefas de Hoje</CardTitle>
              <CardDescription>
                5 tarefas pendentes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckSquare className="h-5 w-5 text-blue-600" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">Revisar orçamento mensal</p>
                    <p className="text-xs text-muted-foreground">Alta prioridade</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <CheckSquare className="h-5 w-5 text-green-600" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">Pagar conta de luz</p>
                    <p className="text-xs text-muted-foreground">Vence hoje</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Target className="h-5 w-5 text-purple-600" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">Meta: Economizar R$ 10.000</p>
                    <p className="text-xs text-muted-foreground">52% concluída</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Alerts */}
        <Card>
          <CardHeader>
            <CardTitle>Alertas Importantes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-start gap-3 rounded-lg border border-yellow-200 bg-yellow-50 dark:bg-yellow-950 dark:border-yellow-800 p-3">
                <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
                <div>
                  <p className="font-medium text-yellow-900 dark:text-yellow-100">
                    Orçamento de Alimentação próximo do limite
                  </p>
                  <p className="text-sm text-yellow-700 dark:text-yellow-300">
                    Você gastou R$ 850 de R$ 1.000 este mês (85%)
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-lg border border-blue-200 bg-blue-50 dark:bg-blue-950 dark:border-blue-800 p-3">
                <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <p className="font-medium text-blue-900 dark:text-blue-100">
                    3 contas vencem esta semana
                  </p>
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    Total de R$ 320,00 a pagar
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

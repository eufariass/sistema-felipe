import { Header } from "@/components/layout/header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Wallet, Tag, CreditCard, PieChart } from "lucide-react";
import Link from "next/link";

export default function FinancePage() {
  return (
    <div>
      <Header
        title="Finanças"
        description="Gerencie suas finanças pessoais"
      />
      <div className="p-6 space-y-6">
        {/* Quick Actions */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Link href="/finance/transactions?action=new">
            <Card className="hover:bg-accent cursor-pointer transition-colors">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Nova Transação
                </CardTitle>
                <Plus className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground">
                  Adicionar receita ou despesa
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/finance/accounts">
            <Card className="hover:bg-accent cursor-pointer transition-colors">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Contas
                </CardTitle>
                <Wallet className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground">
                  Gerenciar contas bancárias
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/finance/categories">
            <Card className="hover:bg-accent cursor-pointer transition-colors">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Categorias
                </CardTitle>
                <Tag className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground">
                  Organizar categorias
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/finance/budgets">
            <Card className="hover:bg-accent cursor-pointer transition-colors">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Orçamentos
                </CardTitle>
                <PieChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground">
                  Definir limites de gastos
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Main Modules */}
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Transações</CardTitle>
              <CardDescription>
                Visualize e gerencie todas as suas movimentações financeiras
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/finance/transactions">
                <Button className="w-full">
                  <CreditCard className="mr-2 h-4 w-4" />
                  Ver Transações
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Relatórios</CardTitle>
              <CardDescription>
                Analise seus gastos e receitas com gráficos e relatórios
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/finance/reports">
                <Button className="w-full">
                  <PieChart className="mr-2 h-4 w-4" />
                  Ver Relatórios
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Overview Cards */}
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Contas Cadastradas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">0</div>
              <p className="text-sm text-muted-foreground mt-2">
                Nenhuma conta cadastrada ainda
              </p>
              <Link href="/finance/accounts">
                <Button variant="outline" size="sm" className="mt-4">
                  Adicionar Conta
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Categorias</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">0</div>
              <p className="text-sm text-muted-foreground mt-2">
                Nenhuma categoria cadastrada
              </p>
              <Link href="/finance/categories">
                <Button variant="outline" size="sm" className="mt-4">
                  Adicionar Categoria
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Transações do Mês</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">0</div>
              <p className="text-sm text-muted-foreground mt-2">
                Nenhuma transação este mês
              </p>
              <Link href="/finance/transactions">
                <Button variant="outline" size="sm" className="mt-4">
                  Adicionar Transação
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

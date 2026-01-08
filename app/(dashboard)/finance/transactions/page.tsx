"use client";

import { useState } from "react";
import { Header } from "@/components/layout/header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, ArrowUpCircle, ArrowDownCircle, Filter } from "lucide-react";
import { formatCurrency, formatDate } from "@/lib/utils";

export default function TransactionsPage() {
  const [showFilters, setShowFilters] = useState(false);

  const transactions = []; // Will be fetched from Supabase

  return (
    <div>
      <Header title="Transações" description="Histórico de movimentações financeiras" />
      <div className="p-6 space-y-6">
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <Button onClick={() => setShowFilters(!showFilters)} variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filtros
            </Button>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Nova Transação
          </Button>
        </div>

        {transactions.length === 0 ? (
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-12">
              <ArrowUpCircle className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold mb-2">
                Nenhuma transação registrada
              </h3>
              <p className="text-muted-foreground text-center mb-4">
                Comece adicionando sua primeira transação
              </p>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Adicionar Transação
              </Button>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardContent className="p-0">
              <div className="divide-y">
                {transactions.map((transaction: any) => (
                  <div
                    key={transaction.id}
                    className="flex items-center justify-between p-4 hover:bg-accent cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      {transaction.type === "income" ? (
                        <ArrowUpCircle className="h-8 w-8 text-green-600" />
                      ) : (
                        <ArrowDownCircle className="h-8 w-8 text-red-600" />
                      )}
                      <div>
                        <p className="font-medium">{transaction.description}</p>
                        <p className="text-sm text-muted-foreground">
                          {formatDate(transaction.date)} • {transaction.category?.name}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p
                        className={`font-semibold ${
                          transaction.type === "income"
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {transaction.type === "income" ? "+" : "-"}
                        {formatCurrency(transaction.amount)}
                      </p>
                      <Badge variant="outline">{transaction.status}</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}

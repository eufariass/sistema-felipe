"use client";

import { useState } from "react";
import { Header } from "@/components/layout/header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Plus, Tag, TrendingUp, TrendingDown } from "lucide-react";

export default function CategoriesPage() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    type: "expense" as "income" | "expense",
    color: "#EF4444",
    icon: "tag",
  });

  const categories = []; // Will be fetched from Supabase

  return (
    <div>
      <Header title="Categorias" description="Organize suas transações em categorias" />
      <div className="p-6 space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Minhas Categorias</h2>
          <Button onClick={() => setShowForm(!showForm)}>
            <Plus className="mr-2 h-4 w-4" />
            Nova Categoria
          </Button>
        </div>

        {showForm && (
          <Card>
            <CardHeader>
              <CardTitle>Adicionar Nova Categoria</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome</Label>
                    <Input
                      id="name"
                      placeholder="Ex: Alimentação"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="type">Tipo</Label>
                    <Select
                      id="type"
                      value={formData.type}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          type: e.target.value as "income" | "expense",
                        })
                      }
                    >
                      <option value="expense">Despesa</option>
                      <option value="income">Receita</option>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="color">Cor</Label>
                    <Input
                      id="color"
                      type="color"
                      value={formData.color}
                      onChange={(e) =>
                        setFormData({ ...formData, color: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button type="submit">Salvar</Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowForm(false)}
                  >
                    Cancelar
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        <div className="grid gap-6 md:grid-cols-2">
          {/* Expense Categories */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <TrendingDown className="h-5 w-5 text-red-600" />
                  Categorias de Despesa
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              {categories.filter((c: any) => c.type === "expense").length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  <Tag className="h-8 w-8 mx-auto mb-2 opacity-50" />
                  <p>Nenhuma categoria de despesa</p>
                </div>
              ) : (
                <div className="space-y-2">
                  {/* Categories will be listed here */}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Income Categories */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                  Categorias de Receita
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              {categories.filter((c: any) => c.type === "income").length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  <Tag className="h-8 w-8 mx-auto mb-2 opacity-50" />
                  <p>Nenhuma categoria de receita</p>
                </div>
              ) : (
                <div className="space-y-2">
                  {/* Categories will be listed here */}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

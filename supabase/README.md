# Configuração do Supabase

## Passo 1: Criar um projeto no Supabase

1. Acesse [https://supabase.com](https://supabase.com)
2. Crie uma nova organização (se ainda não tiver)
3. Crie um novo projeto
4. Anote a URL e a chave anon

## Passo 2: Configurar variáveis de ambiente

1. Copie o arquivo `.env.example` para `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Preencha as variáveis com suas credenciais do Supabase:
   ```
   NEXT_PUBLIC_SUPABASE_URL=sua_url_do_supabase
   NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_chave_anon
   ```

## Passo 3: Executar o schema SQL

1. Acesse o SQL Editor no painel do Supabase
2. Cole o conteúdo do arquivo `schema.sql`
3. Execute o script

Isso criará todas as tabelas, índices, políticas RLS e triggers necessários.

## Passo 4: Configurar autenticação

No painel do Supabase:

1. Vá em **Authentication** > **Providers**
2. Habilite **Email** (já deve estar habilitado por padrão)
3. Opcionalmente, habilite **Magic Link** para login sem senha

## Estrutura do Banco de Dados

### Módulo de Finanças
- `profiles`: Perfis de usuários
- `accounts`: Contas bancárias/carteiras
- `categories`: Categorias de receitas/despesas
- `transactions`: Transações financeiras
- `recurrences`: Transações recorrentes
- `installments`: Parcelamentos
- `budgets`: Orçamentos por categoria

### Módulo de Metas
- `goals`: Metas do usuário
- `milestones`: Marcos dentro de cada meta

### Módulo de Tarefas
- `tasks`: Tarefas do usuário
- `subtasks`: Subtarefas/checklist

## Segurança

Todas as tabelas possuem **Row Level Security (RLS)** habilitado, garantindo que:
- Usuários só podem acessar seus próprios dados
- Não é possível acessar dados de outros usuários
- Políticas são aplicadas automaticamente em todas as queries

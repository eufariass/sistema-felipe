# Sistema Felipe - Gerenciamento Pessoal Completo

Sistema web moderno e completo para gerenciamento pessoal de **Finanças**, **Metas** e **Tarefas**. Desenvolvido com Next.js 14, TypeScript, Tailwind CSS e Supabase.

## Funcionalidades

### Módulo de Finanças
- Dashboard financeiro com visão geral (saldo, receitas, despesas, economia)
- Gerenciamento de contas bancárias/carteiras
- Registro de transações (receita/despesa/transferência)
- Categorias personalizáveis com ícones e cores
- Subcategorias opcionais
- Transações recorrentes (mensal, semanal, anual)
- Parcelamentos com controle de parcelas
- Orçamento mensal por categoria com alertas
- Relatórios e gráficos interativos
- Filtros avançados por período, categoria, conta
- Exportação para CSV/PDF

### Módulo de Metas
- Criação de metas com progresso visual
- Categorias (Financeira, Pessoal, Profissional, Saúde, etc.)
- Valor/quantidade alvo e atual
- Prazos e prioridades
- Marcos/milestones
- Metas hierárquicas (sub-metas)
- Histórico de atualizações
- Dashboard com visão por categoria
- Timeline de metas

### Módulo de Tarefas
- Lista de tarefas com prioridades
- Status (pendente, em progresso, concluída, cancelada)
- Data de vencimento
- Categorias e tags
- Subtarefas (checklist)
- Estimativa e tempo real gasto
- Tarefas recorrentes
- Vinculação com metas
- Filtros e busca avançada
- Visualização em lista, Kanban ou calendário
- Matriz de Eisenhower

### Dashboard Principal
- Resumo financeiro do mês
- Próximas tarefas
- Metas em destaque
- Gráficos de gastos
- Alertas importantes

### Configurações
- Perfil do usuário
- Preferências (moeda, tema, formato de data)
- Gerenciamento de categorias
- Backup e importação/exportação de dados

## Stack Tecnológico

- **Frontend**: Next.js 14+ com App Router, TypeScript, Tailwind CSS, shadcn/ui
- **Backend**: Next.js API Routes e Server Actions
- **Banco de Dados**: Supabase (PostgreSQL) com Row Level Security
- **Autenticação**: Supabase Auth (email/senha + magic link)
- **Gráficos**: Recharts
- **Estado**: React Hooks e Server Components
- **Validação**: Zod + React Hook Form
- **Icons**: Lucide React

## Instalação

### 1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/sistema-felipe.git
cd sistema-felipe
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Configure o Supabase

1. Crie uma conta no [Supabase](https://supabase.com)
2. Crie um novo projeto
3. Execute o schema SQL localizado em `supabase/schema.sql` no SQL Editor do Supabase
4. Copie suas credenciais

### 4. Configure as variáveis de ambiente

```bash
cp .env.example .env.local
```

Edite o arquivo `.env.local` e adicione suas credenciais do Supabase:
```
NEXT_PUBLIC_SUPABASE_URL=sua_url_do_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_chave_anon
```

### 5. Execute o projeto

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

## Estrutura do Projeto

```
sistema-felipe/
├── app/                      # Páginas e rotas do Next.js
│   ├── (dashboard)/         # Páginas protegidas
│   │   ├── dashboard/       # Dashboard principal
│   │   ├── finance/         # Módulo de finanças
│   │   ├── goals/           # Módulo de metas
│   │   ├── tasks/           # Módulo de tarefas
│   │   └── settings/        # Configurações
│   └── auth/                # Páginas de autenticação
├── components/              # Componentes React
│   ├── layout/             # Componentes de layout
│   └── ui/                 # Componentes UI (shadcn/ui)
├── lib/                     # Utilitários e configurações
│   ├── actions/            # Server Actions
│   ├── validations/        # Schemas Zod
│   └── supabase/           # Cliente Supabase
├── types/                   # Tipos TypeScript
└── supabase/               # Schema SQL e docs
```

## Banco de Dados

O sistema utiliza PostgreSQL através do Supabase com as seguintes tabelas principais:

- **profiles**: Perfis de usuários
- **accounts**: Contas bancárias
- **categories**: Categorias de transações
- **transactions**: Transações financeiras
- **recurrences**: Transações recorrentes
- **installments**: Parcelamentos
- **budgets**: Orçamentos
- **goals**: Metas
- **milestones**: Marcos de metas
- **tasks**: Tarefas
- **subtasks**: Subtarefas

Todas as tabelas possuem **Row Level Security (RLS)** habilitado para garantir segurança dos dados.

## Segurança

- Autenticação via Supabase Auth
- Row Level Security no banco de dados
- Validação de dados com Zod
- Proteção de rotas com middleware
- HTTPS obrigatório em produção

## Desenvolvimento

### Scripts disponíveis

```bash
npm run dev      # Inicia o servidor de desenvolvimento
npm run build    # Compila o projeto para produção
npm run start    # Inicia o servidor de produção
npm run lint     # Executa o linter
```

## Deploy

O projeto pode ser deployado facilmente na Vercel:

1. Faça push do código para o GitHub
2. Conecte o repositório na Vercel
3. Configure as variáveis de ambiente
4. Deploy automático!

## Contribuindo

Contribuições são bem-vindas! Por favor:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Autor

Desenvolvido com por Felipe

## Suporte

Para suporte, abra uma issue no GitHub ou entre em contato.

---

**Sistema Felipe** - Seu assistente pessoal de produtividade e finanças
# 🚀 Guia de Configuração Rápida - Sistema Felipe

## ⚠️ IMPORTANTE - Siga esta ordem:

### 1️⃣ Configurar Supabase (PRIMEIRO)

#### A. Criar Projeto
1. Acesse [supabase.com](https://supabase.com)
2. Crie um novo projeto
3. Escolha uma senha forte para o banco de dados
4. Aguarde a criação (2-3 minutos)

#### B. Executar Schema SQL
1. No painel do Supabase, vá em **SQL Editor** (ícone </> na barra lateral)
2. Clique em **New Query**
3. Copie TODO o conteúdo do arquivo `supabase/schema.sql` deste repositório
4. Cole no editor
5. Clique em **RUN** (ou pressione Ctrl+Enter)
6. ✅ Aguarde até ver "Success. No rows returned"

#### C. Pegar Credenciais
1. Vá em **Settings** (⚙️) → **API**
2. Copie:
   - **Project URL** (ex: `https://xxxxxxxxxxx.supabase.co`)
   - **anon public** key (chave grande que começa com `eyJ...`)

### 2️⃣ Configurar Ambiente Local

```bash
# No diretório do projeto
cp .env.example .env.local
```

Edite `.env.local` e adicione suas credenciais:
```env
NEXT_PUBLIC_SUPABASE_URL=https://seu-projeto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.sua-chave-aqui
```

### 3️⃣ Testar Localmente

```bash
npm install
npm run build
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000)

### 4️⃣ Deploy (Vercel, Netlify, etc.)

#### Vercel (Recomendado)
1. Conecte seu repositório GitHub
2. Adicione as variáveis de ambiente:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
3. Deploy!

#### Netlify
1. Conecte repositório
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Adicione as mesmas variáveis de ambiente
5. Deploy!

### 5️⃣ Criar Sua Conta

Após deploy:
1. Acesse seu site
2. Clique em "Registre-se"
3. Use: **felipe** / **bola0101**
4. Confirme o email (se necessário)

---

## 🔧 Solução de Problemas

### Erro 403 Forbidden
- Variáveis de ambiente não configuradas
- Verifique se o `.env.local` existe (local)
- Verifique se as variáveis estão no painel de deploy (produção)

### Erro ao fazer login
- Schema SQL não foi executado
- Verifique as tabelas no Supabase: Data → Table Editor

### Erro de build
- Execute `npm install` novamente
- Delete `.next` e `node_modules`, depois reinstale

---

## 📞 Checklist de Configuração

- [ ] Projeto criado no Supabase
- [ ] Schema SQL executado com sucesso
- [ ] Credenciais copiadas
- [ ] Arquivo `.env.local` criado
- [ ] Build local funcionando (`npm run dev`)
- [ ] Variáveis de ambiente configuradas no serviço de deploy
- [ ] Site acessível e funcionando
- [ ] Conta criada e login funcionando

---

✅ Tudo certo? Seu sistema está pronto para uso!

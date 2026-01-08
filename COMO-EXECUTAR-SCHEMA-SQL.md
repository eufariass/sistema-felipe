# 🎯 Como Executar o Schema SQL no Supabase (Passo a Passo)

## ⚠️ IMPORTANTE: Você tentou copiar comandos bash no SQL Editor!

O SQL Editor do Supabase aceita **APENAS** comandos SQL, não comandos de terminal (bash).

---

## ✅ PASSO A PASSO CORRETO:

### 1️⃣ Abrir o Supabase
1. Acesse [supabase.com](https://supabase.com)
2. Faça login
3. Abra seu projeto

### 2️⃣ Abrir SQL Editor
1. No menu lateral esquerdo, clique em **SQL Editor** (ícone </>)
2. Clique em **New Query** (botão verde)

### 3️⃣ Copiar o Schema SQL
1. Abra o arquivo `supabase/schema.sql` deste repositório
2. Selecione **TODO** o conteúdo (Ctrl+A / Cmd+A)
3. Copie (Ctrl+C / Cmd+C)

### 4️⃣ Colar e Executar
1. Cole no editor do Supabase (Ctrl+V / Cmd+V)
2. Clique em **RUN** (ou pressione Ctrl+Enter)
3. ✅ Aguarde aparecer: **"Success. No rows returned"**

---

## 🚨 O QUE **NÃO** FAZER:

❌ **NÃO** copie comandos bash como:
```bash
cp .env.example .env.local     # ERRADO! Isso é terminal, não SQL!
npm install                     # ERRADO! Isso é terminal, não SQL!
```

✅ **COPIE APENAS** o conteúdo SQL como:
```sql
CREATE TABLE profiles (        # CORRETO! Isso é SQL!
  id UUID PRIMARY KEY...
);
```

---

## 📋 Checklist:

- [ ] Acessei o Supabase
- [ ] Abri o SQL Editor
- [ ] Cliquei em "New Query"
- [ ] Copiei TODO o conteúdo de `supabase/schema.sql`
- [ ] Colei no editor
- [ ] Cliquei em RUN
- [ ] Vi a mensagem de sucesso

---

## ✅ Depois de executar o schema:

O sistema estará pronto! Você poderá:
1. Fazer deploy no seu serviço de hospedagem (Vercel, Netlify, etc.)
2. Configurar as variáveis de ambiente lá:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
3. Acessar seu site e criar sua conta!

---

## 🆘 Precisa de Ajuda?

Se aparecer algum erro, me envie a mensagem completa do erro!

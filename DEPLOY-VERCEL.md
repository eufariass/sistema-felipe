# 🚀 Deploy na Vercel (Recomendado para Next.js)

## Por que Vercel?
- ✅ **100% Grátis** para projetos pessoais
- ✅ **Feito para Next.js** pela mesma empresa que criou o framework
- ✅ **Deploy automático** a cada push no GitHub
- ✅ **HTTPS grátis**
- ✅ **Domínio customizado grátis** (você pode usar eufelipefarias.com)
- ✅ **Zero configuração** - funciona na primeira vez

---

## 🎯 Passo a Passo (5 minutos):

### 1️⃣ Criar conta na Vercel
1. Acesse [vercel.com](https://vercel.com)
2. Clique em **Sign Up**
3. Escolha **Continue with GitHub**
4. Faça login com sua conta GitHub

### 2️⃣ Importar Projeto
1. No dashboard da Vercel, clique em **Add New** → **Project**
2. Procure pelo repositório: `eufariass/sistema-felipe`
3. Clique em **Import**

### 3️⃣ Configurar Variáveis de Ambiente
1. Na tela de configuração, role até **Environment Variables**
2. Adicione estas duas variáveis:

```
NEXT_PUBLIC_SUPABASE_URL
https://qgvfkfpwnvnbazywugnb.supabase.co

NEXT_PUBLIC_SUPABASE_ANON_KEY
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFndmZrZnB3bnZuYmF6eXd1Z25iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUyODI2MTIsImV4cCI6MjA4MDg1ODYxMn0.yHEtpGamUIZXLN8kR_iA1xvKvk_H7fjw9HI-qxkoOHQ
```

3. Clique em **Deploy**

### 4️⃣ Aguardar Deploy (2-3 minutos)
- A Vercel vai:
  - ✅ Clonar o código
  - ✅ Instalar dependências
  - ✅ Fazer build
  - ✅ Publicar

### 5️⃣ Configurar Domínio Customizado
1. Após o deploy, vá em **Settings** → **Domains**
2. Digite: `eufelipefarias.com`
3. A Vercel vai te dar instruções para:
   - Adicionar registro CNAME no seu provedor de domínio
   - Ou usar os nameservers da Vercel

**DNS na Hostinger:**
1. Entre no painel da Hostinger
2. Vá em **Domínios** → **eufelipefarias.com** → **DNS**
3. Adicione um registro CNAME:
   - **Nome**: `@` ou `www`
   - **Valor**: `cname.vercel-dns.com`

### 6️⃣ Pronto! 🎉
- Seu site estará em: `https://sistema-felipe.vercel.app`
- E também em: `https://eufelipefarias.com` (após configurar DNS)

---

## 🔄 Deploy Automático
Toda vez que você fizer push no GitHub, a Vercel automaticamente:
- Faz build
- Testa
- Publica

---

## ✅ Vantagens sobre Hostinger:
- **Gratuito** (Hostinger cobra)
- **Mais rápido** (CDN global)
- **Mais fácil** (zero configuração)
- **Melhor para Next.js** (feito pela mesma empresa)
- **HTTPS automático**
- **Deploy automático**

---

## 💡 Você pode manter a Hostinger para:
- Emails (eu@eufelipefarias.com)
- Outros sites
- Apenas usar o domínio

---

**Tempo total: 5 minutos** ⏱️

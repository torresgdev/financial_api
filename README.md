# 💸 API de Controle Financeiro Pessoal

API RESTful para gerenciar suas finanças pessoais, com controle de transações (entradas e saídas), cálculo de saldo e arquitetura limpa.

---

## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Knex.js](https://knexjs.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [Docker](https://www.docker.com/)
- Clean Architecture

---

## 🧱 Estrutura de Pastas

src/ ├── controllers/ ├── services/ ├── repositories/ ├── routes/ ├── database/ │ └── migrations/ ├── app.js └── server.js

---

## ⚙️ Como rodar o projeto

### 1. Clone o repositório

```bash
git clone git@github.com:torresgdev/finance-api.git
cd finance-api
```

### 2. Crie o arquivo .env com base no .env.example

```bash
DB_HOST=db
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=postgres
DB_NAME=finance
```

### 3. Suba o banco com Docker

```bash
docker-compose up -d
```

### 4. Instale as dependências

```bash
npm install
```

### 5. Rode as migrations

```bash
npm run migrate
```

### 6. Inicie a aplicação

```bash
npm run dev
```

---

📮 Endpoints

🔹 Criar transação

```bash
POST /transactions
```

<pre> ```json { "title": "salario", "amount": 400, "type": "INCOME or EXPENSE", "category": "Trabalho"} ``` </pre>

🔹 Listar transações

```bash
GET /transactions
```

🔹 Resumo financeiro

```bash
GET /transactions/summary
```

<pre> ```json { "title": 5000, "expense": 1200, "balance": 3800 } ``` </pre>

🔹 Atualizar transação

```bash
PUT /transactions/:id
```

🔹 Deletar transação

```bash
DELETE /transactions/:id
```

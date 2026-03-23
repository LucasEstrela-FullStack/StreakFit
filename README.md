<img width="1349" height="650" alt="image" src="https://github.com/user-attachments/assets/a61e29dc-7ffb-4e34-8528-fc9ad6e9a378" />

<img width="1348" height="646" alt="image" src="https://github.com/user-attachments/assets/aa1ad4f1-7d73-475e-acde-c4f60db96e74" />

<img width="378" height="573" alt="image" src="https://github.com/user-attachments/assets/f997e969-3495-4e82-ab20-8f67d3320137" />

# StreakFit API 🚀

Esta é a API do **StreakFit**, desenvolvida com **Fastify**, **TypeScript** e integrada ao **Google Gemini AI** para oferecer uma experiência de personal trainer inteligente.

## 🛠️ Tecnologias Principais

- **Framework**: [Fastify 5](https://fastify.io/)
- **Linguagem**: TypeScript
- **Banco de Dados**: PostgreSQL com **Prisma ORM**
- **Autenticação**: [Better-Auth](https://www.better-auth.com/)
- **IA**: Google Generative AI (Gemini 2.5 Flash)
- **Documentação**: Scalar + Swagger (disponível em `/docs`)
- **Validação**: Zod com Fastify Type Provider

## ⚙️ Configuração do Ambiente

1.  **Dependências**:
    ```bash
    npm install
    ```

2.  **Variáveis de Ambiente**:
    Copie o arquivo `.env.example` para `.env` e preencha as chaves necessárias:
    ```bash
    cp .env.example .env
    ```

3.  **Banco de Dados**:
    Certifique-se de que o PostgreSQL está rodando (via Docker ou local) e execute:
    ```bash
    npx prisma migrate dev
    ```

## 🚀 Scripts Disponíveis

- `npm run dev`: Inicia o servidor em modo watch (desenvolvimento).
- `npm run build`: Gera o cliente do Prisma e compila o código TypeScript.
- `npm run prisma:generate`: Apenas gera o cliente do Prisma.

## 📡 Endpoints Principais

- `GET /home`: Dados iniciais da Home.
- `GET /me`: Dados do usuário logado.
- `POST /ai`: Chat com o Personal Trainer Virtual.
- `GET /workout-plans`: Gerenciamento de planos de treino.
- `GET /docs`: Documentação interativa da API (Scalar).

## 🐳 Docker

A API está preparada para ser containerizada. Para rodar o banco de dados via Docker:
```bash
docker-compose up -d
```

## 📂 Estrutura de Pastas

```text
src/
├── generated/      # Código gerado (Prisma client)
├── lib/            # Configurações globais (AI, Auth, DB, Env)
├── routes/         # Definições de rotas (Fastify)
├── schemas/        # Esquemas de validação Zod
├── usecases/       # Lógica de negócio e casos de uso
└── index.ts        # Ponto de entrada da aplicação
```

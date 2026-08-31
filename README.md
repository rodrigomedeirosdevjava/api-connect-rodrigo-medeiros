# API Connect

API REST desenvolvida em Node.js e Express para gerenciamento de usuários, utilizando os princípios de uma arquitetura REST, separação de responsabilidades e respostas padronizadas em JSON.

O projeto foi desenvolvido como parte de uma experiência prática de desenvolvimento back-end, contemplando a implementação das operações CRUD, validação de dados, tratamento de erros, testes dos endpoints e versionamento utilizando Git e GitHub.

---

## 📋 Sobre o projeto

A **API Connect** é uma API REST responsável pelo gerenciamento de usuários.

O projeto foi construído inicialmente utilizando uma estrutura de persistência em memória, através de um array JavaScript. Dessa forma, é possível demonstrar o funcionamento das operações de criação, consulta, atualização e remoção sem a necessidade de configurar um banco de dados.

A aplicação foi organizada buscando manter uma separação clara entre:

* **Rotas:** responsáveis pelo direcionamento das requisições;
* **Controllers:** responsáveis pela lógica de processamento;
* **Dados:** responsáveis pela estrutura de armazenamento em memória;
* **Servidor:** responsável pela inicialização e configuração da aplicação.

---

## 🎯 Objetivos

O projeto tem como principais objetivos:

* Desenvolver uma API REST funcional;
* Implementar operações CRUD para usuários;
* Utilizar corretamente os métodos HTTP;
* Trabalhar com códigos de status HTTP;
* Validar dados recebidos nas requisições;
* Padronizar respostas em formato JSON;
* Implementar tratamento de recursos inexistentes;
* Realizar testes dos endpoints;
* Utilizar Git para controle de versão;
* Documentar a API para facilitar sua utilização por outros desenvolvedores.

---

## 🚀 Tecnologias utilizadas

O projeto foi desenvolvido utilizando:

| Tecnologia     | Finalidade                                           |
| -------------- | ---------------------------------------------------- |
| **Node.js**    | Ambiente de execução JavaScript no back-end          |
| **Express**    | Framework utilizado para construção da API REST      |
| **JavaScript** | Linguagem utilizada no desenvolvimento               |
| **JSON**       | Formato utilizado na comunicação entre cliente e API |
| **HTTP**       | Protocolo utilizado na comunicação                   |
| **Git**        | Controle de versão                                   |
| **GitHub**     | Hospedagem do repositório                            |
| **Postman**    | Testes das requisições HTTP                          |

---

## 🏗️ Arquitetura do projeto

A aplicação utiliza uma organização baseada na separação de responsabilidades.

```text
Cliente
   │
   │ HTTP Request
   ▼
Routes
   │
   ▼
Controllers
   │
   ▼
Data
   │
   ▼
Resposta JSON
   │
   ▼
Cliente
```

### Routes

As rotas definem os endpoints disponíveis e direcionam cada requisição para o controller responsável.

### Controllers

Os controllers concentram a lógica de processamento das requisições, validações, manipulação dos dados e construção das respostas HTTP.

### Data

A camada de dados mantém os usuários em uma estrutura de armazenamento em memória.

### Server

O servidor é responsável por inicializar o Express, habilitar o processamento de JSON e registrar as rotas da aplicação.

---

## 📁 Estrutura do projeto

```text
api-connect/
│
├── src/
│   ├── controllers/
│   │   └── userController.js
│   │
│   ├── data/
│   │   └── users.js
│   │
│   ├── routes/
│   │   └── userRoutes.js
│   │
│   └── server.js
│
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

---

## ⚙️ Pré-requisitos

Para executar o projeto localmente, é necessário possuir instalado:

* Node.js;
* npm;
* Git.

Para verificar se o Node.js está instalado:

```bash
node --version
```

Para verificar o npm:

```bash
npm --version
```

Para verificar o Git:

```bash
git --version
```

---

## 📥 Instalação

Clone o repositório:

```bash
git clone https://github.com/SEU-USUARIO/api-connect-rodrigo-medeiros.git
```

Acesse o diretório:

```bash
cd api-connect-rodrigo-medeiros
```

Instale as dependências:

```bash
npm install
```

---

## ▶️ Execução

Para iniciar a aplicação:

```bash
npm start
```

A API será executada na porta:

```text
http://localhost:3000
```

Também é possível executar a aplicação em modo de desenvolvimento utilizando:

```bash
npm run dev
```

Nesse modo, o Node.js utiliza o recurso `--watch`, permitindo reiniciar automaticamente a aplicação quando os arquivos do projeto forem alterados.

Ao iniciar corretamente, o servidor exibirá:

```text
API Connect executando na porta 3000
```

---

# 📡 Endpoints

A API disponibiliza os seguintes endpoints:

| Método   | Endpoint     | Descrição             | Status de sucesso |
| -------- | ------------ | --------------------- | ----------------- |
| `POST`   | `/users`     | Cadastrar usuário     | `201 Created`     |
| `GET`    | `/users`     | Listar usuários       | `200 OK`          |
| `GET`    | `/users/:id` | Buscar usuário por ID | `200 OK`          |
| `PUT`    | `/users/:id` | Atualizar usuário     | `200 OK`          |
| `DELETE` | `/users/:id` | Remover usuário       | `204 No Content`  |

---

# 👤 Cadastro de usuário

## POST `/users`

Cria um novo usuário.

### Requisição

```http
POST /users
Content-Type: application/json
```

### Corpo

```json
{
  "name": "Rodrigo",
  "email": "rodrigo@example.com"
}
```

### Resposta

**201 Created**

```json
{
  "data": {
    "id": 1,
    "name": "Rodrigo",
    "email": "rodrigo@example.com"
  }
}
```

---

# 📋 Listagem de usuários

## GET `/users`

Retorna todos os usuários cadastrados.

### Requisição

```http
GET /users
```

### Resposta

**200 OK**

```json
{
  "data": [
    {
      "id": 1,
      "name": "Rodrigo",
      "email": "rodrigo@example.com"
    }
  ]
}
```

---

# 🔎 Busca de usuário por ID

## GET `/users/:id`

Retorna um usuário específico utilizando seu identificador.

### Exemplo

```http
GET /users/1
```

### Resposta com sucesso

**200 OK**

```json
{
  "data": {
    "id": 1,
    "name": "Rodrigo",
    "email": "rodrigo@example.com"
  }
}
```

### Usuário não encontrado

Caso o ID informado não exista:

```http
GET /users/999
```

A API retorna:

**404 Not Found**

```json
{
  "error": "Usuário não encontrado"
}
```

---

# ✏️ Atualização de usuário

## PUT `/users/:id`

Atualiza os dados de um usuário existente.

### Exemplo

```http
PUT /users/1
Content-Type: application/json
```

### Corpo

```json
{
  "name": "Rodrigo Medeiros",
  "email": "rodrigo.medeiros@example.com"
}
```

### Resposta

**200 OK**

```json
{
  "data": {
    "id": 1,
    "name": "Rodrigo Medeiros",
    "email": "rodrigo.medeiros@example.com"
  }
}
```

Caso o ID não exista, a API retorna:

**404 Not Found**

```json
{
  "error": "Usuário não encontrado"
}
```

---

# 🗑️ Remoção de usuário

## DELETE `/users/:id`

Remove um usuário pelo ID.

### Exemplo

```http
DELETE /users/1
```

Quando a operação é realizada com sucesso, a API retorna:

**204 No Content**

Como não há conteúdo a ser retornado após a exclusão, a resposta não possui corpo.

Caso o usuário não exista:

**404 Not Found**

```json
{
  "error": "Usuário não encontrado"
}
```

---

# ✅ Validações

A API possui validações nos endpoints responsáveis pelo cadastro e atualização de usuários.

Os campos abaixo são obrigatórios:

* `name`
* `email`

Caso o campo `name` não seja informado:

**400 Bad Request**

```json
{
  "error": "O campo name é obrigatório"
}
```

Caso o campo `email` não seja informado:

**400 Bad Request**

```json
{
  "error": "O campo email é obrigatório"
}
```

A validação ocorre antes da inserção ou alteração do registro, evitando que dados incompletos sejam armazenados.

---

# 📦 Padronização das respostas

As respostas da API seguem uma estrutura padronizada.

Para operações realizadas com sucesso que retornam dados, utiliza-se:

```json
{
  "data": {}
}
```

Para respostas de erro:

```json
{
  "error": "Mensagem do erro"
}
```

Essa padronização facilita o consumo da API por aplicações clientes e permite que o front-end trate respostas de maneira consistente.

---

# 🌐 Códigos HTTP utilizados

A API utiliza códigos de status HTTP de acordo com o resultado de cada operação.

| Código | Significado | Utilização                                      |
| ------ | ----------- | ----------------------------------------------- |
| `200`  | OK          | Consultas e atualizações realizadas com sucesso |
| `201`  | Created     | Cadastro de novo usuário                        |
| `204`  | No Content  | Remoção realizada com sucesso                   |
| `400`  | Bad Request | Dados obrigatórios não informados               |
| `404`  | Not Found   | Usuário não encontrado                          |

---

# 🧪 Testes

Os endpoints foram testados utilizando o **Postman**, simulando o comportamento de um cliente externo consumindo a API.

Foram considerados cenários de sucesso e falha.

### 1. Cadastro com sucesso

```http
POST /users
```

Resultado esperado:

```text
201 Created
```

### 2. Cadastro sem e-mail

```http
POST /users
```

Resultado esperado:

```text
400 Bad Request
```

### 3. Listagem de usuários

```http
GET /users
```

Resultado esperado:

```text
200 OK
```

### 4. Busca por usuário inexistente

```http
GET /users/999
```

Resultado esperado:

```text
404 Not Found
```

Os testes permitiram verificar tanto o funcionamento dos endpoints quanto o tratamento das situações de erro previstas na aplicação.

---

# 💾 Persistência de dados

Nesta versão do projeto, os usuários são armazenados em memória através de um array JavaScript.

Isso significa que os dados permanecem disponíveis enquanto a aplicação estiver em execução.

Ao reiniciar o servidor, os dados armazenados são perdidos.

Essa abordagem foi utilizada para manter o foco na implementação dos conceitos fundamentais de uma API REST, permitindo posteriormente substituir a estrutura em memória por um banco de dados sem alterar significativamente a organização das rotas e controllers.

---

# 🔐 Controle de versão

O projeto utiliza **Git** para controle de versão e **GitHub** para hospedagem do código-fonte.

O arquivo `.gitignore` foi configurado para impedir o versionamento de arquivos e diretórios que não devem ser enviados ao repositório, como:

```text
node_modules/
.env
.DS_Store
npm-debug.log*
```

As dependências do projeto podem ser instaladas novamente utilizando:

```bash
npm install
```

---

# 🔄 Fluxo básico de utilização

Um exemplo de fluxo para utilização da API é:

```text
1. Iniciar o servidor
       ↓
2. POST /users
       ↓
3. Usuário é criado
       ↓
4. GET /users
       ↓
5. Lista de usuários é retornada
       ↓
6. GET /users/:id
       ↓
7. Usuário específico é consultado
       ↓
8. PUT /users/:id
       ↓
9. Dados são atualizados
       ↓
10. DELETE /users/:id
       ↓
11. Usuário é removido
```

---

# 📌 Considerações finais

A API Connect foi desenvolvida com o objetivo de consolidar conceitos fundamentais do desenvolvimento back-end, incluindo criação de APIs REST, métodos HTTP, códigos de status, manipulação de requisições JSON, validação de dados, tratamento de erros, separação de responsabilidades, testes e controle de versão.

A estrutura atual também permite evoluções futuras, como a implementação de um banco de dados, autenticação, autorização, validações mais avançadas, testes automatizados, documentação com OpenAPI/Swagger e outras funcionalidades necessárias para transformar o MVP em uma aplicação mais robusta.

---

# 👨‍💻 Autor

**Rodrigo Medeiros**

Projeto desenvolvido como parte de uma experiência prática de desenvolvimento back-end.

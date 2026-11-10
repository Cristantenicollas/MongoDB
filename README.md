# 📚 Projeto MongoDB — API de Cadastro de Alunos

## 📌 Sobre o projeto

Este repositório contém um projeto desenvolvido com **Node.js e MongoDB**, com o objetivo de praticar a criação de uma API e a integração de uma aplicação JavaScript com um banco de dados não relacional.

A aplicação permite realizar operações de gerenciamento de alunos, utilizando os métodos HTTP para inserir, consultar, atualizar e excluir informações armazenadas no banco de dados.

O projeto tem como finalidade desenvolver conhecimentos sobre operações CRUD, conexão com banco de dados, criação de rotas e manipulação de dados por meio de requisições HTTP.

---

## 🎯 Objetivos

- Compreender o funcionamento do banco de dados MongoDB.
- Aprender a conectar uma aplicação Node.js ao MongoDB.
- Desenvolver uma API para gerenciamento de informações.
- Implementar operações CRUD.
- Trabalhar com requisições e respostas HTTP.
- Utilizar variáveis de ambiente para armazenar configurações.
- Praticar a organização e execução de projetos utilizando Node.js.

---

## 🛠️ Tecnologias utilizadas

| Tecnologia | Descrição |
|---|---|
| JavaScript | Linguagem utilizada no desenvolvimento da aplicação. |
| Node.js | Ambiente de execução JavaScript no servidor. |
| Express | Framework utilizado para estruturar o servidor e as rotas HTTP, quando utilizado no projeto. |
| MongoDB | Banco de dados NoSQL responsável pelo armazenamento das informações. |
| MongoDB Node.js Driver | Biblioteca utilizada para realizar a comunicação entre Node.js e MongoDB. |
| Dotenv | Recurso para carregar configurações armazenadas em variáveis de ambiente. |
| Thunder Client | Ferramenta utilizada para testar requisições HTTP. |

---

## 📁 Estrutura do projeto

```text
MongoDB/
│
├── node_modules/       # Dependências instaladas
│
├── .env                # Variáveis de ambiente
├── .gitignore          # Arquivos ignorados pelo Git
│
├── index.js            # Arquivo principal da aplicação
│
├── package.json        # Configurações e dependências
├── package-lock.json   # Controle das versões das dependências
│
└── README.md           # Documentação do projeto
```

### Descrição dos arquivos

- **index.js:** arquivo principal, responsável pela execução da aplicação e implementação da conexão e das operações do projeto.
- **.env:** armazena informações de configuração, como a string de conexão com o MongoDB.
- **.gitignore:** define quais arquivos e pastas não devem ser enviados ao repositório.
- **package.json:** contém informações do projeto, scripts e dependências.
- **package-lock.json:** registra as versões exatas das dependências instaladas.
- **node_modules:** pasta que armazena as bibliotecas necessárias para o funcionamento da aplicação.

---

## 🗄️ Banco de dados

O projeto utiliza o **MongoDB**, um banco de dados não relacional (NoSQL) que trabalha com documentos organizados em coleções.

A estrutura utilizada para o armazenamento dos dados está organizada da seguinte maneira:

| Elemento | Descrição |
|---|---|
| Banco de dados | `escola` |
| Coleção | `alunos` |
| Documentos | Registros contendo as informações dos alunos. |

### Conexão com o MongoDB

A aplicação utiliza uma string de conexão para estabelecer comunicação com o banco de dados.

Essa informação é armazenada no arquivo `.env`, utilizando uma variável de ambiente chamada `MONGO_URI`.

Exemplo de configuração:

```env
MONGO_URI=sua_string_de_conexao
```

Dessa maneira, as informações de acesso ficam separadas do código-fonte, proporcionando uma organização melhor e evitando a exposição de credenciais.

---

## ⚙️ Funcionalidades

A aplicação trabalha com as principais operações CRUD:

| Operação | Método HTTP | Descrição |
|---|---|---|
| Create | POST | Cadastra um novo aluno. |
| Read | GET | Consulta os alunos cadastrados. |
| Update | PUT | Atualiza as informações de um aluno. |
| Delete | DELETE | Remove um aluno do banco de dados. |

### 1. Cadastrar aluno — POST

Permite inserir um novo registro na coleção de alunos.

### 2. Listar alunos — GET

Retorna os registros de alunos armazenados no banco de dados.

### 3. Buscar aluno — GET

Permite localizar um aluno específico utilizando seu identificador (ID).

### 4. Atualizar aluno — PUT

Permite modificar as informações de um aluno já cadastrado.

### 5. Excluir aluno — DELETE

Remove um registro específico da coleção de alunos.

---

## 🚀 Como executar o projeto

Para executar a aplicação localmente, siga os passos abaixo.

### 1. Pré-requisitos

Antes de começar, é necessário possuir:

- [Node.js](https://nodejs.org/) instalado.
- [Visual Studio Code](https://code.visualstudio.com/) ou outro editor de código.
- Uma conta e um banco de dados configurado no [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
- Git instalado para clonar o repositório.

### 2. Clonar o repositório

Abra o terminal e execute:

```bash
git clone https://github.com/Cristantenicollas/MongoDB.git
```

### 3. Acessar a pasta

```bash
cd MongoDB
```

### 4. Instalar as dependências

Execute o comando:

```bash
npm install
```

Esse comando instala as bibliotecas necessárias para o funcionamento da aplicação, conforme as dependências definidas no `package.json`.

### 5. Configurar as variáveis de ambiente

Crie um arquivo chamado `.env` na raiz do projeto.

Adicione a variável de conexão:

```env
MONGO_URI=sua_string_de_conexao
```

Substitua o valor de exemplo pela sua própria string de conexão do MongoDB Atlas.

**Importante:** não compartilhe o arquivo `.env` nem envie suas credenciais para o GitHub.

### 6. Executar a aplicação

No terminal do VS Code, execute:

```bash
node --watch --env-file=.env index.js
```

O parâmetro `--watch` permite reiniciar automaticamente a aplicação quando alterações nos arquivos monitorados são identificadas.

O parâmetro `--env-file=.env` carrega as variáveis de ambiente do arquivo `.env`.

Após iniciar o servidor, a aplicação estará pronta para receber requisições, conforme a porta configurada no código.

---

## 🧪 Testando a API

Para testar as funcionalidades, pode ser utilizada a extensão **Thunder Client**, disponível no Visual Studio Code, ou o Postman.

As requisições devem ser enviadas para o endereço local da aplicação, utilizando a porta configurada no servidor.

Exemplo de endereço:

```text
http://localhost:3000
```

### Métodos utilizados nos testes

- `POST`: envio de informações para cadastrar um aluno.
- `GET`: consulta dos registros existentes.
- `PUT`: atualização de informações.
- `DELETE`: exclusão de registros.

Cada requisição deve utilizar a rota correspondente implementada no arquivo `index.js`.

---

## 🔒 Segurança e boas práticas

Durante o desenvolvimento, são utilizadas algumas práticas importantes:

- Separação das configurações por meio de variáveis de ambiente.
- Utilização do `.gitignore` para evitar o envio de arquivos desnecessários.
- Proteção da string de conexão com o banco de dados.
- Organização das dependências por meio do npm.
- Utilização de métodos HTTP adequados para cada operação.

**Atenção:** o arquivo `.env` deve permanecer fora do repositório público. Caso uma credencial seja publicada acidentalmente, ela deverá ser substituída.

---

## 📖 Conceitos trabalhados

O desenvolvimento deste projeto permite colocar em prática os seguintes conceitos:

**MongoDB:** banco de dados NoSQL que armazena informações em documentos.

**Node.js:** ambiente que permite executar JavaScript fora do navegador.

**API REST:** estrutura que permite a comunicação entre aplicações por meio de requisições HTTP.

**CRUD:** conjunto de operações responsáveis pela criação, leitura, atualização e exclusão de dados.

**Variáveis de ambiente:** configurações externas utilizadas pela aplicação sem precisar deixar informações sensíveis diretamente no código.

**Métodos HTTP:** métodos utilizados para indicar qual operação será realizada durante uma requisição.

---

## 👨‍💻 Autor

**Nicollas Cristante Gonçalves**

Projeto desenvolvido com finalidade educacional, visando aprimorar os conhecimentos em JavaScript, Node.js, APIs e bancos de dados MongoDB.

---

## 📌 Repositório

GitHub: [Cristantenicollas/MongoDB](https://github.com/Cristantenicollas/MongoDB)

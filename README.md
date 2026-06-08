# Attus TaskFlow - Gestão de Incidentes e Diagnóstico

Sistema full-stack desenvolvido como prova técnica para a Attus (via Gupy), com foco na gestão de incidentes técnicos, tratamento de concorrência de dados e análise de integridade através de logs de diagnóstico.

## 🔥 Introdução

O Attus TaskFlow foi criado para centralizar o gerenciamento de chamados técnicos, permitindo o cadastro, consulta e atualização de incidentes de forma segura e confiável.

Além das funcionalidades de CRUD, o projeto aborda um cenário real de concorrência de dados, implementando mecanismos para evitar perda de informações durante atualizações simultâneas.

### Principais funcionalidades

* Cadastro de incidentes
* Listagem de incidentes
* Atualização de incidentes
* Validação de dados de entrada
* Logs estruturados para auditoria e rastreamento de falhas
* Controle de concorrência utilizando Optimistic Locking
* Arquitetura organizada seguindo princípios SOLID e Clean Code

### ⚙️ Pré-requisitos

Antes de executar o projeto, é necessário possuir:

* Docker Desktop
* JDK 21
* Maven
* Node.js (v18 ou superior)
* Angular CLI
* PostgreSQL (via Docker)

Coamndos para verificar as versões instaladas:

```bash
java -version
node -v
npm -v
mvn -v
ng version
docker --version
```

### 🔨 Guia de instalação

#### 1. Clonar o repositório

```bash
git clone URL_DO_REPOSITORIO
cd attus-taskflow
```

#### 2. Iniciar o banco de dados

Na raiz do projeto execute:

```bash
docker-compose up -d
```

#### 3. Executar o backend

Acesse a pasta do backend:

```bash
cd backend
```

Execute a aplicação:

```bash
./mvnw spring-boot:run
```

A API ficará disponível em:

```text
http://localhost:8080
```

#### 4. Executar o frontend

Acesse a pasta do frontend:

```bash
cd frontend
```

Instale as dependências:

```bash
npm install
```

Inicie a aplicação:

```bash
npm start
```

A interface ficará disponível em:

```text
http://localhost:4200
```

## 🛠️ Executando os testes

### Backend

Execute os testes unitários com:

```bash
./mvnw test
```

### Frontend

Execute os testes Angular:

```bash
ng test
```

## 📡 API Endpoints

| Método | Endpoint             | Descrição                       |
| ------ | -------------------- | ------------------------------- |
| GET    | /api/v1/tickets      | Lista todos os incidentes       |
| POST   | /api/v1/tickets      | Cria um novo incidente          |
| PUT    | /api/v1/tickets/{id} | Atualiza um incidente existente |

## 🏗 Arquitetura e Boas Práticas

O projeto segue uma arquitetura em camadas, promovendo separação de responsabilidades e facilidade de manutenção.

### Aplicação dos princípios

* Controllers responsáveis pela exposição da API
* DTOs para transferência de dados
* Services contendo regras de negócio
* Repositories para acesso ao banco de dados
* Validações utilizando Bean Validation
* Controle de concorrência utilizando Optimistic Locking (@Version)
* Logs estruturados com SLF4J e Logback

## 📄 Análise de Incidente

O desafio inclui uma análise de concorrência de dados e a implementação de uma solução para evitar o problema conhecido como Lost Update.

A documentação completa contendo:

* Diagnóstico do problema
* Solução implementada
* Benefícios
* Trade-offs técnicos

está disponível em:

```text
docs/NOTA_TECNICA.md
```

## 📦 Tecnologias usadas

### Front-end

* Angular 18
* TypeScript
* Bootstrap 5
* Bootstrap Icons
* Reactive Forms

### Back-end

* Java 21
* Spring Boot 3.3+
* Spring Data JPA
* PostgreSQL
* Lombok
* Validation API

### Infraestrutura e Observabilidade

* Docker
* Docker Compose
* SLF4J
* Logback

## 👷 Autor

**Ângelo Silvano** - *Desenvolvedor Full Stack* - [angelosilvanno](https://github.com//angelosilvanno).

# Attus TaskFlow - Gestão de Incidentes e Diagnóstico 🚀

Este projeto é uma solução full-stack desenvolvida para o desafio técnico da **Attus (via Gupy)**. O foco principal da aplicação é a gestão resiliente de chamados técnicos e a análise de integridade de dados através de logs de diagnóstico.

## 🛠 Stack Tecnológica

### Backend
- **Java 21** (LTS)
- **Spring Boot 3.3+**
- **Spring Data JPA**
- **PostgreSQL** (Persistência Relacional)
- **Lombok** (Produtividade e Clean Code)
- **Validation API** (Integridade de dados)

### Frontend
- **Angular 18** (Arquitetura Standalone)
- **Bootstrap 5 & Bootstrap Icons** (Visual Clean e Responsivo)
- **Reactive Forms** (Validações robustas)
- **TypeScript**

### Infraestrutura e Observabilidade
- **Docker & Docker Compose** (Containerização do Banco de Dados)
- **SLF4J/Logback** (Logs estruturados para análise de incidentes)

---

## 🏗 Arquitetura e Boas Práticas

O projeto foi estruturado seguindo os princípios de **Clean Code** e **SOLID**:
- **Layered Architecture:** Separação clara entre API (Controllers/DTOs), Domínio (Models/Repositories) e Serviços (Business Logic).
- **Desacoplamento:** Uso de DTOs para evitar a exposição direta de entidades da base de dados.
- **Integridade de Dados:** Implementação de **Optimistic Locking** (@Version) para prevenir o problema de *Lost Update* em cenários de alta concorrência.
- **Observabilidade:** Logs estratégicos implementados na camada de serviço para facilitar o rastreio de falhas e auditoria.

---

## 🔍 Análise de Incidente (Parte 2 do Desafio)

Uma parte fundamental deste desafio é a identificação de falhas sistêmicas. 
Neste projeto, simulamos e tratamos um incidente de **concorrência de dados**. 

A documentação detalhada, incluindo o diagnóstico da falha, a solução proposta e os trade-offs técnicos, encontra-se na pasta de documentação:
👉 [**Acesse a Nota Técnica aqui**](./docs/NOTA_TECNICA.md)

---

## ⚙️ Como Executar o Projeto

### Pré-requisitos
- Docker Desktop
- JDK 21
- Node.js (v18 ou superior)
- Angular CLI

### 1. Banco de Dados (Docker)
Na raiz do projeto, execute o comando para subir o container do PostgreSQL:
```bash
docker-compose up -d
```

### 2. Backend (Spring Boot)
Navegue até a pasta `/backend` e execute:
```bash
./mvnw spring-boot:run
```
*A API estará disponível em `http://localhost:8080`*

### 3. Frontend (Angular)
Navegue até a pasta `/frontend`, instale as dependências e inicie o servidor:
```bash
npm install
npm start
```
*Acesse a interface em `http://localhost:4200`*

---

## 📡 API Endpoints (v1)

| Método | Endpoint | Descrição |
| :--- | :--- | :--- |
| **GET** | `/api/v1/tickets` | Lista todos os incidentes |
| **POST** | `/api/v1/tickets` | Registra um novo incidente |
| **PUT** | `/api/v1/tickets/{id}` | Atualiza dados de um incidente |

---

## 👨‍💻 Autor
Desenvolvido por **Ângelo Silvano** como prova técnica para Engenheiro Full-Stack Sênior.
```

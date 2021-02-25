# The Quantum Terminals Game

(In progress...) This is a remake of my old simple 2D procedurally generated puzzle game **The Quantum Terminals**. In this build I experimented with **microservices architecture**, migrated project to **GraphQL** with **TypeScript**.

![Alt text](readme/cover.jpg?raw=true "Cover")

### Technologies

- React.js
- Apollo
- TypeScript
- GraphQL
- Node.js
- Express
- PostgreSQL
- TypeORM
- Docker
- Jest
- Cypress
- Terraform
- Travis CL

# Server

### Run

```sh

  $ docker-compose up

```

**API-GATEWAY:** http://localhost:7100/graphql

---

### Structure

- **server-api-gateway** - _graphql api gateway_

- **server-admin-service** - _REST admin service_

- **server-admin-service** - _REST game service (rules, score, statistics, etc.)_

- **server-user-service** - _REST user service (auth)_

### Testing

```sh
	$ yarn test

```

## Environments

### Server-api-gateway

| NAME              |               DESCRIPTION               |
| ----------------- | :-------------------------------------: |
| REDIS_URL         |           <redis_server_url>            |
| DATABASE_URL      |        <database_postgresql_url>        |
| DATABASE_PORT     |       <database_postgresql_port>        |
| POSTGRES_DB       |   <database_postgresql_database_name>   |
| POSTGRES_USER     |   <database_postgresql_database_user>   |
| POSTGRES_PASSWORD | <database_postgresql_database_password> |
| PORT              |        <server-api-gateway-port>        |

### Database server-api-gateway

| NAME              |               DESCRIPTION               |
| ----------------- | :-------------------------------------: |
| POSTGRES_DB       |   <database_postgresql_database_name>   |
| POSTGRES_USER     |   <database_postgresql_database_user>   |
| POSTGRES_PASSWORD | <database_postgresql_database_password> |

# Client

### Run

```sh

  $ docker-compose up

```

**CLIENT HOST:** http://localhost:8080/

### Environments

| NAME           |     DESCRIPTION      |
| -------------- | :------------------: |
| SERVER_API_URL | <server_graphql_url> |

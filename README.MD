# The Quantum Terminals Game

(In progress...) This is a remake of my old simple 2D procedurally generated puzzle game The Quantum Terminals. In this build I experimented with microservices architecture, migrated project to GraphQL with TypeScript.

![Alt text](readme/cover.jpg?raw=true "Cover")

## Technologies

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

## Run

```sh

  $ docker-compose up

```

## Testing

## Folder Structurue

## Environments

### Server-api-gateway

| NAME     |      DESCRIPTION    | 
|----------|:-------------:|
| REDIS_URL |  <redis_server_url> |
| DATABASE_URL | <database_postgresql_url>  |
| DATABASE_PORT | <database_postgresql_port>  |
| POSTGRES_DB | <database_postgresql_database_name>  |
| POSTGRES_USER | <database_postgresql_database_user>  |
| POSTGRES_PASSWORD |  <database_postgresql_database_password> |
| PORT | <server-api-gateway-port>   |

### Database Gateway

| NAME     |     DESCRIPTION     | 
|----------|:-------------:|
| POSTGRES_DB |   |
| POSTGRES_USER |   |
| POSTGRES_PASSWORD |   |

## Deployment


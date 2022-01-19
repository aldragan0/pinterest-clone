# Pinterest Clone

## Architecture

Application architecture

```mermaid
erDiagram
          AUTH-SERVICE ||..|| USER-SERVICE : uses
          PIN-SERVICE ||--|| AUTH-SERVICE : uses
          PIN-FRONT ||--|| PIN-SERVICE : uses
          AUTH-FRONT ||--|| AUTH-SERVICE : uses
          CONTAINER-FRONT ||--|| AUTH-FRONT : uses
          CONTAINER-FRONT  ||--|| PIN-FRONT : uses
```

## Backend

- NestJS based microservices

### Services

- Auth microservice
  - handles the user authorization accross the application
- User microservice
  - handles user account operations (create account, get account details)
- Pin microservice
  - serves the main content of the application
  - makes use of the [Pexels API](https://www.pexels.com/api)
  - uses both in-memory and DB to cache the data retrieved from the API

## Database

- The backend services use a MySQL database for intermediary storage and caching
- The database is shared between the services

## Frontend

- React micro-frontend apps which use [Webpack Module Federation](https://webpack.js.org/concepts/module-federation/) to load the remote applications

### Services

- Auth frontend
  - exposes authentication related components (Login, Signup)
- Pin frontend
  - exposes the main features of the application
- Container frontend
  - wraps the Auth and Pin frontends and serves the application to the user

## Use cases

### Create account for user

```mermaid
sequenceDiagram
    Container-Front->>+Auth-Front: Open create account view
    Auth-Front->>+User-Service: Create account for user
    User-Service->>Container-Front: Go to Login page
```

### Login user

```mermaid
sequenceDiagram
    Container-Front->>+Auth-Front: Open Login page
    Auth-Front->>+Auth-Service: Login user
    Auth-Service->>User-Service: Retrieve user account
    User-Service->>Auth-Service: Send user account
    Auth-Service->>Auth-Front: Send OK response
    Auth-Front->>Container-Front: Send token
```

### Logout user

```mermaid
sequenceDiagram
    Container-Front->>Container-Front: Logout user
    Container-Front->>Container-Front: Go to Home page
```

### See curated pins

```mermaid
sequenceDiagram
    Container-Front->>Container-Front: Go to pin page
    Container-Front->>Pin-Front: Load default data
    Pin-Front->>Pin-Service: Fetch data
    Pin-Service->>Auth-Service: Check user permissions
    Auth-Service->>Pin-Service: User authenticated
    Pin-Service->>Pin-Front: Send data
```

### Search for specific pins

```mermaid
sequenceDiagram
    Container-Front->>Container-Front: Input search
    Container-Front->>Pin-Front: Load data
    Pin-Front->>Pin-Service: Fetch search results
    Pin-Service->>Auth-Service: Check user permissions
    Auth-Service->>Pin-Service: User authenticated
    Pin-Service->>Pin-Front: Send search results
```

### Used patterns

- API gateway
- Messaging
- Access Token
- Decompose by business capability

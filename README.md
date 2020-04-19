# PUAMB

## General

#### Overview

> A fitness tracker service comprised of a React (Typescript) frontend served by a GraphQl API and database

#### Tasks

- [X] Create monorepo (yarn workspaces)
- [X] Create site and api packages
- [X] Use Typescript

---

## API

#### Overview


> A Lambda based GraphQL server connected to a mysql database.
> Using Typescript classes to generate both GraphQL schemas and TypeORM entities.
> Generated schemas will be used to initialize an `apollo-server` graphql server which will use 
> `typeorm` for the functions in its resolvers.


#### Tasks

- [X] Create a serverless project to provision:
	- [X] VPC - and stuff
	- [X] MySQL Database
	- [X] Lambda
- [X] Generate basic schema with `type-graphql` decorators
- [X] Generate basic entities with `typeorm` decorators
- [X] Encrypt secret fields with `typeorm-encrypted`
- [X] Add Input type classes for `graphql` mutations
- [X] Add basic resolver for `User` to test
- [X] Solve typeORM lambda connection management
- [X] Create `apollo-server` lambda handler
- [X] Create CLI triggered lambda to execute raw SQL
- [X] Stop losing data in db
- [ ] Add CRUD resolvers for basic schema objects
- [ ] Add Authentication
- [ ] Add Authorization via `typeorm` auth decorators and apollo context

---

## SITE

#### Overview

> A `react` website communicating with the backend via `graphql`

#### Tasks

- [ ] generate site with `create-react-app` with Typescript flag
- [ ] add `react-router` 
- [ ] add `redux-toolkit`
- [ ] build the fucking site

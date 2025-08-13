# brightgrove-api

## Getting Started

```
cp -n .env.example .env
cp -n docker-compose.override.example.yml docker-compose.override.yml
```

## Docker for mysql

```bash
# run a stack with containers
$ docker-compose up -d
```

## Migration

```bash
# commands listed below are specified in the package.json
# create migration
$ npm run migration:create --name=Migration

# generate migration
$ npm run migration:generate --name=Migration

# run migrations
$ npm run migration:run

# revert migration
$ npm run migration:revert
```
#!/usr/bin/env bash
aws lambda invoke \
    --function-name puamb-graphql-api-dev-rawSQL \
    --region eu-west-1 \
    --payload '{ "query": "select * from graphql.user" }' \
    rawSQLResponse.json

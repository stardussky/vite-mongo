#!/bin/sh

. ./.env

mongorestore --authenticationDatabase admin -u ${MONGO_USERNAME} -p ${MONGO_PASSWORD} --nsInclude ${MONGO_DATABASE}.* --gzip --drop
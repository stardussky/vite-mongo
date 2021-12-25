#!/bin/sh

. ./.env
NOW=$(date +'%Y%m%d-%H%M%S')
mv dump/${MONGO_DATABASE} dump/backup/${MONGO_DATABASE}_"$NOW"
docker exec -it ${COMPOSE_PROJECT_NAME}_mongo sh -c "exec mongodump --authenticationDatabase admin -u ${MONGO_USERNAME} -p ${MONGO_PASSWORD} -d ${MONGO_DATABASE} --gzip"
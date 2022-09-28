FROM        node:14.17.0-alpine

WORKDIR     /opt/code

RUN         apk add --no-cache --update jq

RUN         npm install -g zapier-platform-cli

COPY        package.json yarn.lock ./

RUN         yarn install

COPY        . .
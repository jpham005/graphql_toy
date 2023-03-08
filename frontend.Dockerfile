FROM node:19-alpine3.16
RUN apk add g++
WORKDIR /app
COPY frontend.entry.sh /tmp/

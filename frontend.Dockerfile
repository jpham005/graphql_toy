FROM node:19-alpine3.16
RUN apk update && apk add g++ make python3
WORKDIR /app
COPY frontend.entry.sh /tmp/

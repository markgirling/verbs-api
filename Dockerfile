FROM node:10.15-slim

WORKDIR /app
COPY . .
RUN npm install

ENTRYPOINT ["node", "./docker-entrypoint.js"]

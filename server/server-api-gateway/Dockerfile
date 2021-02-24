FROM node:12-alpine

WORKDIR /app/server-api-gateway

COPY ./server-api-gateway/package.json ./

RUN npm install

COPY ./server-api-gateway/ ./

RUN ls

# Run in development mode
CMD [ "npm", "run", "watch" ]
FROM node:12-alpine

WORKDIR /app/server-api-gateway

COPY ./server-api-gateway/package.json ./

RUN yarn

COPY ./server-api-gateway/ ./

RUN ls

# Run in development mode
CMD [ "yarn", "run", "watch" ]
FROM node:12-alpine

WORKDIR /app

COPY ./server-api-gateway/package.json ./

#Install project dependencies
RUN npm install

COPY ./server-api-gateway/ ./

# Run in development mode
CMD [ "npm", "run", "watch" ]
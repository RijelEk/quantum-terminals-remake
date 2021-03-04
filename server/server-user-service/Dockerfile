FROM node:12-alpine

WORKDIR /app/server-user-service

COPY ./server-user-service/package.json ./

RUN npm install

COPY ./server-user-service/ ./

RUN ls

# Run in development mode
CMD [ "npm", "run", "watch" ]
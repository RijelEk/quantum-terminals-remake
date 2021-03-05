FROM node:12-alpine

WORKDIR /app/server-user-service

COPY ./server-user-service/package.json ./

RUN yarn

COPY ./server-user-service/ ./

RUN ls

# Run in development mode
CMD [ "yarn", "run", "watch" ]
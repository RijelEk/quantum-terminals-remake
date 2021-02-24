FROM node:12-alpine

WORKDIR /usr/src/app

COPY ./package.json ./
COPY yarn.lock ./

RUN yarn

COPY . .

RUN ls

EXPOSE 8080

# Run in development mode
CMD ["npm", "run", "dev"]
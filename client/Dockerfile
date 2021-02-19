FROM node:12-alpine

WORKDIR /app/client

COPY ./client/package.json ./

RUN npm install

COPY ./client/ ./

EXPOSE 8080

# Run in development mode
CMD ["npm", "run", "dev"]
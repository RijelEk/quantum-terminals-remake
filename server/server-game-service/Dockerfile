FROM node:12

COPY . /opt/app

WORKDIR /opt/app/server-game-service

RUN npm install

EXPOSE 4001

CMD ["npm", "run", "dev"]

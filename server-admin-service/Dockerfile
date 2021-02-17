FROM node:12

COPY . /opt/app

WORKDIR /opt/app/server-admin-service

RUN npm install

EXPOSE 4002

CMD ["npm", "dev"]

FROM node:14-alpine

WORKDIR /container

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]
FROM node:14-alpine

WORKDIR /auth

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]
FROM node:14-alpine

WORKDIR /pin

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]
FROM node:14-alpine As development

WORKDIR /usr/src/pin

COPY package*.json ./

RUN npm install glob rimraf

RUN npm install --only=development

COPY . .

RUN npm run build

CMD ["node", "dist/main"]

# FROM node:14-alpine As production

# ARG NODE_ENV=production
# ENV NODE_ENV=${NODE_ENV}

# WORKDIR /usr/src/pin

# COPY package*.json ./

# RUN npm install glob rimraf

# RUN npm install --only=production

# COPY . .

# COPY --from=development /usr/src/pin/dist ./dist

# CMD ["node", "dist/main"]

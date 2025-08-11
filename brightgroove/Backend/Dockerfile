FROM node:18-alpine

WORKDIR /usr/src/app

RUN npm install -g @nestjs/cli

COPY package*.json ./
COPY tsconfig*.json ./
COPY nest-cli.json ./

RUN npm ci --include=dev && npm cache clean --force

COPY src src
COPY db db
COPY .env .  

RUN npm run build
RUN rm -rf src db

EXPOSE 3000
CMD ["node", "dist/src/main.js"]
FROM node:11-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . .

COPY .env.docker /usr/src/app/.env
RUN npm install



CMD ["npm", "run", "start"]
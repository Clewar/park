FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i
# If you are building your code for production
# RUN npm ci --omit=dev
COPY . .

EXPOSE 4000

CMD ["node", "dist/server.js"]
FROM node:18-alpine

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . .

EXPOSE 2456

CMD ["npm", "run", "start"]
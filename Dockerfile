FROM node:15.12.0-alpine3.13
WORKDIR /app
COPY ./package*.json ./
RUN npm install
RUN npm run build
COPY . .
EXPOSE 3000
CMD node dist/main.js
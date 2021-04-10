FROM node:15.12.0-alpine3.13
WORKDIR /app
COPY ./package*.json ./
RUN npm install
RUN npm run build
COPY . .

# FROM node:15.12.0-alpine3.13 As development
# RUN apk add --no-cache bash
# WORKDIR /usr/src/app
# COPY package*.json ./
# RUN npm install --only=development
# COPY . .
# CMD npm run build

# FROM node:15.12.0-alpine3.13 as production
# ARG NODE_ENV=production
# ENV NODE_ENV=${NODE_ENV}
# WORKDIR /usr/src/app
# COPY package*.json ./
# RUN npm install --only=production
# COPY . .
# COPY --from=development /usr/src/app/dist ./dist
# CMD ["node", "dist/main"]
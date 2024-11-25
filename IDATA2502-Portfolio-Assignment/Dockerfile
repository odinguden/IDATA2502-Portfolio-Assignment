#FROM node:lts-alpine
FROM node:18.20.2-alpine

RUN npm install -g http-server

COPY package*.json ./

WORKDIR /src
RUN npm ci

COPY . .

#RUN echo q | npm run test:unit

RUN npm run build

EXPOSE 8080
CMD [ "http-server", "dist" ]
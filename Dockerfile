FROM node:latest

WORKDIR /project/country-app

COPY package.json .
RUN npm install
COPY . .

EXPOSE 3003

CMD [ "npm", "start" ] 
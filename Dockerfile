FROM node:latest

WORKDIR /project/country-app

COPY package.json .
RUN npm install
COPY . .

EXPOSE 3000

CMD [ "npm", "start" ] 
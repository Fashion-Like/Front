FROM node

WORKDIR /app

RUN npm install -g npm@8.5.1

COPY package.json .

RUN npm install

COPY . .

EXPOSE 80

CMD ["npm", "start"]
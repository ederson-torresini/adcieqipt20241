FROM node:20

WORKDIR /app

# Servidor
COPY package.json .
COPY servidor.js .
RUN npm install

# Cliente
COPY cliente cliente
RUN npm install --prefix cliente
RUN npm run build --prefix cliente

CMD [ "node", "servidor.js" ]

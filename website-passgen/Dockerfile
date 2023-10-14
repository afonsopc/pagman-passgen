FROM node:latest

WORKDIR /app
COPY . .

RUN npm install .
RUN npm audit fix
RUN npm run build

CMD npm run serve

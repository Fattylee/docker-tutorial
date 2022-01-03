FROM node:13

WORKDIR /app

COPY ./ ./

CMD ["node", "server.js"]
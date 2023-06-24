FROM node:18-alpine

WORKDIR /home/node/app

EXPOSE 3000

HEALTHCHECK --interval=30s --retries=3 \
    CMD wget -q --spider http://127.0.0.1:3000/healthcheck || exit 1

COPY package.json package-lock.json ./

RUN npm install \
    && npm cache clean --force  

COPY . .

CMD [ "npm", "run", "start" ]

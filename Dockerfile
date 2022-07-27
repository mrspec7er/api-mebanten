FROM node:16-alpine3.15

COPY package* ./
RUN npm install

COPY . .
EXPOSE 8000
ENTRYPOINT ["npm", "run", "start"]
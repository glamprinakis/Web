FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --production --silent
COPY . .
EXPOSE 3000
USER node
CMD ["node", "server.js"]
FROM node:18
WORKDIR /
ADD package*.json ./
WORKDIR /
RUN npm install express cors express-http-proxy
ADD . .
ENV NODE_ENV=production
EXPOSE 8000
CMD node index.js


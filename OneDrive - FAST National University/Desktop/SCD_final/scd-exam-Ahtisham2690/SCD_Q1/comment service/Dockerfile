FROM node:18
WORKDIR /
ADD package*.json ./
WORKDIR /
RUN npm install express dotenv mongoose bycryptjs dotenv cors jsonwebtoken
ADD . .
ENV NODE_ENV=production
EXPOSE 3002
CMD node index.js


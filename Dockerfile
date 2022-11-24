FROM node:16-alpine

WORKDIR /home/react-front

COPY package*.json ./

EXPOSE 3004


CMD ["npm", "start"]

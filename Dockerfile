FROM node:carbon-alpine
WORKDIR /app
ENV NODE_ENV=production
RUN npm i
COPY . /app
CMD [ "npm", "start" ]
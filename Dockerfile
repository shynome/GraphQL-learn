FROM node:carbon-alpine
WORKDIR /app
ENV NODE_ENV=production
COPY . /app
RUN npm i
CMD [ "npm", "start" ]
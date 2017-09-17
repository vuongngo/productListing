FROM node:alpine

RUN apk --update add p7zip==16.02-r1
# Create app directory
RUN mkdir -p /app
WORKDIR /app

# Install app dependencies
COPY package.json /app
RUN yarn install

# Bundle app source
COPY . /app

EXPOSE 4040
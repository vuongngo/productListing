FROM node:alpine

# Create app directory
RUN mkdir -p /app
WORKDIR /app

# Install app dependencies
COPY package.json yarn.lock /app/
RUN yarn install

# Bundle app source
COPY . /app

EXPOSE 3005
CMD [ "npm", "run", "dev:start" ]
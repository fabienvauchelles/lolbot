FROM node:6.7

# Install PM2
RUN npm install -g pm2

# Add source
ADD package.json .

# NPM Install
RUN npm install --production

ADD src src

CMD pm2 start --no-daemon src/index.js

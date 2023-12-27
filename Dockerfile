FROM node:21-alpine
WORKDIR /portfolio_v2/
COPY public/ /portfolio_v2/public
COPY src/ /portfolio_v2/src
COPY package*.json /portfolio_v2/
COPY tailwind.config.js .
RUN npm install
CMD ["npm", "start"]
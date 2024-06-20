FROM node

WORKDIR /usr/src/app

COPY . .

RUN npm install --production
RUN npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
RUN npm run build


CMD [ "npm", "run", "start" ]
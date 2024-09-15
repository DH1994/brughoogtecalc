FROM node

COPY app /app

WORKDIR /app

RUN npm i

USER 1001

CMD node /app/app.js
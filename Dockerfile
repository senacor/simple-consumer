FROM nginx:1.21-alpine

RUN apk --no-cache upgrade

COPY dist/simple-consumer /usr/share/nginx/html/

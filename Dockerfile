FROM nginx:latest

COPY dist/simple-consumer /usr/share/nginx/html/

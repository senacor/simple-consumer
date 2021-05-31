FROM nginx:1.21-alpine

RUN apk --no-cache upgrade

COPY dist/simple-consumer /usr/share/nginx/html/

RUN mkdir /app
COPY runtime/launch.sh /app

ENTRYPOINT ["/bin/bash"]
CMD ["/app/launch.sh"]

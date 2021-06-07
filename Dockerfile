FROM nginx:1.21

RUN apt-get update && DEBIAN_FRONTEND=noninteractive apt-get upgrade -y \
        && rm -rf /var/lib/apt/lists/*

COPY dist/simple-consumer /usr/share/nginx/html/

RUN mkdir /app
COPY runtime/ /app
RUN chown -R nginx: /app


ENTRYPOINT ["/bin/bash"]
CMD ["/app/launch.sh"]

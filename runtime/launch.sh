#!/usr/bin/env bash
export "TZ=Europe/Berlin"

# Log environment
export

cp /usr/share/nginx/html/index.html /usr/share/nginx/html/index_template.html
cat /usr/share/nginx/html/index_template.html | envsubst > /usr/share/nginx/html/index.html

# Start nginx actually:
exec nginx -g 'daemon off;' -c /etc/nginx/nginx.conf

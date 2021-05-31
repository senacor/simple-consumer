#!/usr/bin/env bash
export "TZ=Europe/Berlin"

# Log environment
export

envsubst < /usr/share/nginx/html/index.html > /usr/share/nginx/html/index.html

# Start nginx actually:
exec nginx -c /etc/nginx/nginx.conf

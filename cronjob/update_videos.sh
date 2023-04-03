#!/usr/bin/env bash

until $(curl --request POST --output /dev/null --silent --head --fail http://api:8000/update-videos/); do
    printf 'Waiting for API running...\n'
    sleep 0.5
    attempts=$((attempts+1))
    echo $attempts
    if [ attempts == 120 ]; then
        echo "API cannot be called"
        exit
    fi
done

#!/bin/bash

filename=".env"

if [ ! -e "$filename" ]; then
    touch "$filename"
fi

echo "REACT_APP_API_URL= https://vclcontentplatfromserver.com:5000" > "$filename"

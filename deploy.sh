#!/bin/bash

echo "Make sure you are at root directory! :D"

npm run build "$1/main.mdx" --basepath="/Slides/$1"
mv dist/* $1
rm -rf dist

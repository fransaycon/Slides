#!/bin/bash

echo "Make sure you are at root directory! :D"

./node_modules/.bin/mdx-deck --out-dir $1 --basepath "/Slides/$1" build $1/main.mdx;

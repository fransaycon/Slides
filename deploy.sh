#!/bin/bash

if [ "$1" = "react-native-101" ]; then
    npm run build "react-native-101/main.mdx" --basepath="/Slides/react-native-101"
    mv dist/* react-native-101
    rm -rf dist
else
    echo "Invalid command!"
fi

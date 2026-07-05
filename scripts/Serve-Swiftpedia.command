#!/usr/bin/env zsh

PROJECT_ROOT="$HOME/Documents/Git/Swiftpedia"
cd "$PROJECT_ROOT/"

# Open the webserver
npm install
npm run start -- --host 0.0.0.0

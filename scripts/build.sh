#!/bin/bash

cd "$(dirname "$0")"/../

if [ -z "$JEKYLL_ENV" ]; then
    export JEKYLL_ENV=production
fi

bundle exec jekyll build

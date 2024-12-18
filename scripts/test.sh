#!/bin/bash
#
# Test the built version of the site by proofing the HTML.
#
# 'html-proofer' RubyGem provided by:
# https://github.com/gjtorikian/html-proofer
#

cd "$(dirname $0)/../"

bundle exec htmlproofer \
    --ignore-status-codes 429,500 \
    --ignore-urls github.com \
    --ignore-files ./_site/translations/index.html \
    --log-level debug \
    ./_site
exit $?

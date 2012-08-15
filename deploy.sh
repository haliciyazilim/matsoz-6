#!/bin/bash

if [ -d "public/assets" ]; then
    # Control will enter here if $DIRECTORY exists.
	git rm -rf public/assets
	git commit -m "Auto-deletion of precompiled assets"
fi

git checkout master
git merge development

# cd app/assets/javascripts
# ./processFiles.sh
# cd ../../../
# git add app/assets/javascripts
# git commit -m "Auto-removal of console logs"

sed -i .old 's|//console.log =|console.log =|g' app/assets/javascripts/main.js
rm app/assets/javascripts/main.js.old

rm app/assets/javascripts/plugins/do_not_commit_this.js

rm -rf public/assets
RAILS_ENV=production bundle exec rake assets:precompile
git add public/assets/
git commit -m "Autocommit of precompiled assets"
git push heroku master
git push
git checkout development

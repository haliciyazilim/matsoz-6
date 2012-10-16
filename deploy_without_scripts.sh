#!/bin/bash

GIT_MERGE_AUTOEDIT=no
export GIT_MERGE_AUTOEDIT

git checkout master
git merge development
git push heroku master
git push
git checkout development

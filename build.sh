#!/bin/bash
ng build --prod --base-href=./
cp ./docs/index.html ./docs/404.html
rm -r ../dcl-reps-cv/www
mkdir ../dcl-reps-cv/www
cp ./docs/* ../dcl-reps-cv/www
cd ../dcl-reps-cv
cordova build --release ios
cordova build --release android
cd ../dcl-reps-ng
ng build --prod --base-href=/
cp ./docs/index.html ./docs/404.html
echo 28repslater.deathcomeslifting.com > ./docs/CNAME
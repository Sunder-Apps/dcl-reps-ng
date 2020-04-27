#!/bin/bash
ng build --prod
cp ./docs/index.html ./docs/404.html
echo 28repslater.deathcomeslifting.com > ./docs/CNAME
rm -r ../dcl-reps-cv/www
mkdir ../dcl-reps-cv/www
cp ./docs/* ../dcl-reps-cv/www
cd ../dcl-reps-cv
cordova build --release ios
cordova build --release android
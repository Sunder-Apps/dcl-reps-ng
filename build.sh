#!/bin/bash
ng build --prod --base-href ./
cp ./docs/index.html ./docs/404.html
echo dcl.sunderapps.com > ./docs/CNAME
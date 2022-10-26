#! /bin/sh
SWITCH="\033["
NORMAL="${SWITCH}0m"
GREEN="${SWITCH}1;32m"
npm run build
cd dist
git add .
git commit -m "Auto-deploy"
git push
echo "${GREEN}Deployed to production. Code is pulled every minute."
echo "Available here: http://104.248.246.24/${NORMAL}"

Create-react-app + Eslint + Prettier + Github pages deployment + typescript

Steps
- Go to folder you want this project to live
- Clone this - $git clone (repo URL), this will clone the project & git files
- Rename folder to new proj name, this does not affect git (unless you want "create-react-plus" to be your proj name)
- Remove Git files (in the root folder of your project) - $rm -rf .git (removes the link to the previous repo, so you can establish a link to the new repo)
- You can check if this worked, .git file should have been removed, with this command \$ls -a
- Create new repository, do not check "Initialize this repository with a README" because we already have one
- Follow the steps or copy/paste the commands under "create a new repo on the command line" (see below)
  - \$git init
  - \$git add .
  - git commit -m "Initial Commit"
  - git remote add origin https://github.com/${YOUR-GITHUB-USERNAME}/${REPO-NAME}.git - (establishes the link between the local project to the github repo online)
  - git push -u origin master

Github Pages setup
In package.json replace this with your info
"homepage": "http://${YOUR-GITHUB-USERNAME}.github.io/${REPO-NAME}"

To deploy, use scripts
npm run deploy

See https://github.com/microsoft/TypeScript-React-Conversion-Guide and https://github.com/Microsoft/TypeScript-Handbook/blob/master/pages/tutorials/React.md for more typescript setup

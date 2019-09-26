<!-- @format -->

## Global packages

Run the following command in any directory:

`npm install -g commitizen crypto eslint gitmoji-cli gulp-cli jsdoc npm npm-check-updates npx react-dom serve typedoc typescript @types/react-dom` <br />
will install all necessary packages globally.

## Available Scripts

In the project directory, you can run:

### `yarn`

The program will read through the `package.json` and automatically install all the dependencies.

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn format`

Automatically format all the codes (`.js`, `.jsx`, `.ts`, `.tsx`, `.css` and `.md` files).

## Version controls using Git

### `git init`

Initializes a git repo. This command will generate a `.git/` folder in the project directory.

### `git flow init`

Initializes a git repo in git-flow workflow mechanism.

### `gitmoji init`

Initializes a git repo enabled with emoji-rich commit messages.

### `git add .`

Adds all changed files in the project directory.

### `git commit`

triggers `gitmoji` and you can add emoji into your commit message.

### `git push`

pushes all local commits to your remote repo.

### `git flow feature start <feature name/ feature desc>`

For example, the following command <br />
`git flow feature start pages/about-us` <br />
will create a new branch named `pages/about-us` based on the `develop` branch. <br />
All necessary new feature changes should be committed into this new branch.

### `git flow feature finish <feature name/ feature desc>`

After few changes and commits, if you're confident that the new feature is now finished, you can run the following command <br />
`git flow feature finish pages/about-us` <br />
will merge the branch into the `develop` branch and this `pages/about-us` will be deleted. <br />
Your local branch will be switched to `develop`.

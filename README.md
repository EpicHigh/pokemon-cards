# Pokemon Card Take-Home Assignment - Vue

## Getting Started

Pokemon Card Take-Home Assignment is written in [Vue](https://vuejs.org/).

### Prerequisites

Set up your local development environment by following the steps below.

#### Setting up your Mac

- Install Homebrew (https://brew.sh/)
- Install Node (version 12.x) using `brew install node` (You can also choose to use `nvm`).
- Install Yarn `brew install yarn`
- Download `git` (https://git-scm.com/download/mac)
- (Optional) You can install
  SourceTree (https://product-downloads.atlassian.com/software/sourcetree/ga/Sourcetree_4.0_229.zip) if you prefer using
  a GUI tool for git.

#### Setting up your Windows

- Open powershell with administrator
- Install Scoop (https://scoop.sh/) on
  PowerShell `Invoke-Expression (New-Object System.Net.WebClient).DownloadString('https://get.scoop.sh')`
- (Optional) If you have error run `Set-ExecutionPolicy RemoteSigned -scope CurrentUser`
- Install Command-Line Installer `scoop install cmder` (https://cmder.net/)
- Open Cmder setting and setup Startup Command to `{cmd::Cmder}`
- Install NodeJS (version 12.x) using `scoop install nodejs-lts`
- Install Yarn `scoop install yarn`
- Download `git` (https://git-scm.com/download/win)

#### Setting up your code editor

We recommend using VSCode (https://code.visualstudio.com/docs/?dv=osx) and
WebStorm (https://www.jetbrains.com/webstorm/) as your code editor. Download the below plugins to be more productive
with your tasks and also adhere to the various coding standards being used in the project.

##### Recommended VSCode plugins

- Prettier - Code formatter
- ESLint
- Vue Extensions Pack

Here's a useful VSCode configuration:

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnPaste": true,
  "editor.formatOnSave": true,
  "editor.formatOnType": true,
  "editor.fontFamily": "JetBrains Mono",
  "editor.fontSize": 16,
  "editor.fontLigatures": true,
  "editor.letterSpacing": 1.0,
  "css.validate": false,
  "editor.quickSuggestions": {
    "strings": true
  },
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  },
  "prettier.enable": true,
  "prettier.requireConfig": true,
  "prettier.configPath": ".prettierrc",
  "prettier.prettierPath": "./node_modules/prettier"
}
```

### Installation

1. Extract the zip file.

2. Install packages

```shell
yarn install
```

3. Run development server

```shell
yarn dev
```

### Build

Run the below command to build the application.

```shell
yarn build
```

## Contract

Prasit Tongpradit - [prasit_tongpradit@windowslive.com](mailto:prasit_tongpradit@windowslive.com)

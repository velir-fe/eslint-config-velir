<p align=center><img src="/readme.logo.svg" width="191" alt="velir vite logo"/></p>
<h1 align=center>Velir + Storybook + Vite = <img src="/readme.icon.svg" width="48" alt="Good stuff"></h1>

## Vite

Check out the docs [here](https://vitejs.dev/).

## Storybook

Check out storybook [here](https://storybook.js.org/).

## Linters

The toolchain uses eslint, prettier and stylelint to linting ts, js, scss, css.

<img src="https://eslint.org/assets/img/logo.svg" width="48" alt="eslint logo">
<img src="https://assets.gitlab-static.net/uploads/-/system/project/avatar/6820008/Stylelint-01.png" width="48" />
<img src="https://prettier.io/icon.png" width="48" />

[eslint](https://eslint.org/), [stylelint](https://stylelint.io/) and [prettier](https://prettier.io/) are used to ensure correct and well-formatted javascript and css code. The configuration for these rules are located in [`.eslintrc.json`](./.eslintrc.json) for javascript and [`.stylelintrc.json`](.stylelintrc.json) for css. If your project doesn't have these files, or they are not up to date, follow the steps below to set up the linters in your project.

### Setup linters for a project

TBD

3. #### Setup with Yarn scripts

Clone repository, cd to directory and run yarn to get started.

```
$ yarn
```

4. #### Run

```
$ yarn build
```
Build the project


```
$ yarn preview
```
Preview the project


```
$ yarn storybook
```
Start Storybook


```
$ yarn preview-storybookry
```
Preview Storybook


```
$ yarn build-storybook
```
Build Storybook


```
$ yarn test
```
Test storybook


```
$ yarn test-ci
````
Test storybook ci


### Linter integration with text editor

eslint and stylelint should be enabled in your editor so it will highlight errors as you develop. In addition, code should be formatted/fixed on save using eslint/stylelint. To do this, follow the specific instructions below for Atom or VS Code.


#### Atom linter integration

1. [Install](https://flight-manual.atom.io/using-atom/sections/atom-packages/) the following plugins:
  - [`linter-eslint`](https://atom.io/packages/linter-eslint)
  - [`linter-stylelint`](https://atom.io/packages/linter-stylelint)

1. In each plugin, go in to the settings and check the boxes to "fix" on save.

1. You should now see linter errors in your editor and it should fix most of them when you save the file.

#### VS Code linter integration

1. Install the following packages:
  - [eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  - [stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)

1. Configure VS Code to fix on save in settings.json:
  ```json
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true,
      "source.fixAll.stylelint": true
    },
  ```

1. You should now see linter errors in your editor and it should fix most of them when you save the file.

# Project roadmap
- [x] Storybook integration
- [x] FE Dev server
- [ ] Configurable proxy server settings
- [ ] Configurable bundling and build dir
- [ ] linter presets, scaffolding, and other modules available as npm packages
- [ ] add Cypress and Jest
- [ ] git hooks
- [ ] multiple stack support addons and presets
- [ ] mock endpoint api
- [ ] REPL environment for pair programing
- [ ] code security audit
- [ ] vue.js, svelte flavors

### have ideas for enhancements? create a PR!
````

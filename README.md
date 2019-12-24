# electron-svelte-template
My favourite setup of electron project. It is a boilerplate for [Svelte](https://svelte.dev/) using [ElectronJS](https://electronjs.org/), with [Storybook](https://storybook.js.org/) support.

## Get Started

### To create a new project using this boilerplate

```bash
export PROJECTNAME=""
npx degit "circleoncircles/electron-svelte-template" PROJECTNAME
cd PROJECTNAME
yarn install
```

### To run Storybook

```
yarn storybook
```

Opens browser with Storybook.

### To run Electron app with live reload

```
yarn start:dev
```

### To package application

```
yarn build
```

Packaged app will be in `./dist/` folder.



## Base & Preference
This setup is based on [maxatwork/svelte-electron-template](https://github.com/maxatwork/svelte-electron-template) and [stackacademytv/master-electron]. I put some modifications on top of that.
* [electron-builder] over [electron-package]
* [yarn] over [npm]
* **multi-page app** pre-config
* [bulma] css framework 

## Recommended Resources
* [**electron course**]()
* [**electron-store**]() - a nice way to persistant app data.
* 
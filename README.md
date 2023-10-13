# mm_patient

This repository contains the code base for the interview challenge 'Questionnaire - Patient'.

## Design process
Data for many patients are to be collected in the registry. However, there must always be a Patient Consent for the collection of the data. No forms may be displayed before this.
 
Within one time point a predefined set of questionnaires should be displayed.
There are differences in this set, depending on whether it is the first time point (baseline) or a subsequent time point (follow-up).

The following UML diagramm describes the how the Ressources Questionnaires, QuestionnaireResponses and Patient are related.

![Alt text](./diagrams/UML.svg)


To further define the requirements a [figma file](https://www.figma.com/file/xEu9OCRoDs0ONJ4JHoJXVo/mm_patient?type=design&node-id=4%3A484&mode=design&t=Hh2R5MlU82oOpN17-1) was created. This is the base for the development.
## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

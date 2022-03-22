# Getting Started

## Introduction

### Usage

cls.js is a customizable JS library for nodejs projects to make colorful terminal outputs.

### Installation

npm:

```bash
npm i cls.js
```

yarn:

```bash
yarn add cls.js
```

pnpm:

```bash
pnpm i cls.js
```

### Import

```javascript
const { style } = require("cls.js");
```

### Usage

Using this library is as simple as calling a function and passing arguments to it:


```javascript
style({
 text : "Hello World!",
 color : "red"
});
```

See more options in [options](/guide/options).
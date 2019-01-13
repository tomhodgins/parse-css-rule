# parse-css-rule

Parse a string of text as a CSS rule using JavaScript in the browser environment.

## about

This module makes use of [`parse-css-stylesheet`](https://github.com/tomhodgins/parse-css-stylesheet) to return the first CSS rule parsed from any CSS stylesheet given to this function as a string.

## usage

This software is distributed as an ES module and should work in all modern browsers (including Chrome/Safari/Edge/Firefox).

```js
import parseRule from 'https://unpkg.com/parse-css-rule/index.js'

// Log the parsed CSS rule object to the console
console.log(
  parseRule(':root { background-color: lime }')
)
```
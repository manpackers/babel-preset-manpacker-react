![npm](https://img.shields.io/npm/v/babel-preset-manpacker-react.svg)
![npm bundle size](https://img.shields.io/bundlephobia/min/babel-preset-manpacker-react.svg)
![npm](https://img.shields.io/npm/dw/babel-preset-manpacker-react.svg)
![NPM](https://img.shields.io/npm/l/babel-preset-manpacker-react.svg)
<br><br>
![nodei.co](https://nodei.co/npm/babel-preset-manpacker-react.png?downloads=true&downloadRank=true&stars=true)
<br>
## Explain
Manpacker react preset based on babel7 encapsulation.<br/>
The presets is <code>"manpacker"</code><br>
The following plug-ins are used:<br>
<code>"babel-plugin-transform-react-remove-prop-types"</code>.<br><br>
Babel presets polyfill default config:<br>
```
{"useBuiltIns": "usage", corejs: 3}
```
Configuration items can be referenced: [<code>babel-preset-manpacker</code>](https://www.npmjs.com/package/babel-preset-manpacker)

## Install
```
npm install babel-preset-manpacker-react -D
```
## Usage

- Add &nbsp;<code>.babelrc</code> &nbsp; file to your project. &nbsp;

Configuration content of file.

```
{
  "presets": ["manpacker-react"]
}
```
- You can add a configuration entry to the <code>package.json</code> file as follows.

```
"babel": {
  "presets": ["manpacker-react"]
}
```
Refer to the following configuration.<br>
Example: <br>
```
"babel": {
  "presets": [
    ["manpacker-react", {"useBuiltIns": "entry"}]
  ]
}
```
Ingress files need to be manually introduced
```
import "@babel/polyfill"
```

## Npm
[link](https://www.npmjs.com/package/babel-preset-manpacker-react)

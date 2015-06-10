# This is a project boilerplate for develop react component.

### 0. Clone this repository and delete `.git`
### 1. Change project name, url, etc in `package.json`
### 2. Change project name, url, etc in `README.md`
### 3. Create repository on GitHub
### 4. Setup Travis-ci hook, activate project
### 5. Write component and test.
### 6. Write example
### 7. Update README & `CHANGELOG`
### 8. Create gh-page with generator
### 9. Copy `example` from `develop` to `gh-page` and push to GitHub.
### 10. Add git tag
### 11. Publish to npm with `npm publish`
### 12. Bump version for next release.

----

# react-component-boilerplate [![Build Status](https://travis-ci.org/georgeOsdDev/react-component-boilerplate.svg?branch=develop)](https://travis-ci.org/georgeOsdDev/react-component-boilerplate) [![npm version](https://badge.fury.io/js/react-component-boilerplate.svg)](http://badge.fury.io/js/react-component-boilerplate)

Description here Lorem ipsum dolor sit amet, consectetur adipiscing elit,

## Demo

[View Demo](http://georgeosddev.github.io/react-component-boilerplate/example/)

## Installation

```bash
npm install --save react-component-boilerplate
```

## API

### `MyComponent1`

#### Props

```javascript
MyComponent1.propTypes = {
  foo: React.PropTypes.string.isRequired,
  bar: React.PropTypes.string,
  baz: React.PropTypes.bool
};
```

  * `foo`: Lorem ipsum dolor sit amet

  * `bar`: Lorem ipsum dolor sit amet

  * `baz`: Lorem ipsum dolor sit amet

  Note: Lorem ipsum dolor sit amet



## Usage example

```javascript

import {MyComponent1} from 'react-component-boilerplate';

<MyComponent foo={this.foo.bind(this)}>
  Lorem ipsum dolor sit amet
</MyComponent>
```

See  [example](https://github.com/georgeOsdDev/react-component-boilerplate/tree/develop/example)

```bash
npm install
npm run start:example
```

## Tests

```bash
npm test
```
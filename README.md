# phantomjs-crypto-polyfill

Simple polyfill that just overrides the getRandomValues crypto function with a dummy function to avoid [PhantomJS](http://phantomjs.org/) breaking with when using crypto

## Installation

```
npm install --save-dev phantomjs-crypto-polyfill
```

## Usage

```
require('phantomjs-crypto-polyfill')
```

### Karma

Include the polyfill in the files list of karma.conf
```
...
files: [
  './node_modules/phantomjs-crypto-polyfill/crypto-polyfill.js',
  ...
]
...
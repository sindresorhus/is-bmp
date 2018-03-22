# is-bmp [![Build Status](https://travis-ci.org/sindresorhus/is-bmp.svg?branch=master)](https://travis-ci.org/sindresorhus/is-bmp)

> Check if a Buffer/Uint8Array is a [BMP](https://en.m.wikipedia.org/wiki/BMP_file_format) image


## Install

```
$ npm install is-bmp
```


## Usage

##### Node.js

```js
const readChunk = require('read-chunk');
const isBmp = require('is-bmp');
const buffer = readChunk.sync('unicorn.bmp', 0, 2);

isBmp(buffer);
//=> true
```

##### Browser

```js
const xhr = new XMLHttpRequest();
xhr.open('GET', 'unicorn.bmp');
xhr.responseType = 'arraybuffer';

xhr.onload = () => {
	isBmp(new Uint8Array(this.response));
	//=> true
};

xhr.send();
```


## API

### isBmp(buffer)

Accepts a Buffer (Node.js) or Uint8Array.

It only needs the first 2 bytes.


## Related

- [file-type](https://github.com/sindresorhus/file-type) - Detect the file type of a Buffer/Uint8Array


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)

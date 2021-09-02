# is-bmp

> Check if a Buffer/Uint8Array is a [BMP](https://en.m.wikipedia.org/wiki/BMP_file_format) image

## Install

```
$ npm install is-bmp
```

## Usage

##### Node.js

```js
import {readChunk} from 'read-chunk';
import isBmp from 'is-bmp';

const buffer = await readChunk('unicorn.bmp', {length: 2});

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

Accepts a `Buffer` (Node.js) or `Uint8Array`.

It only needs the first 2 bytes.

## Related

- [file-type](https://github.com/sindresorhus/file-type) - Detect the file type of a Buffer/Uint8Array

'use strict';
var assert = require('assert');
var readChunk = require('read-chunk');
var isBmp = require('./index');

function check(filename) {
	return isBmp(readChunk.sync(filename, 0, 4));
}

it('should detect BMP from Buffer', function () {
	assert(check('fixture.bmp'));
	assert(!check('fixture.png'));
});

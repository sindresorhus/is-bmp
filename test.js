import test from 'ava';
import {readChunkSync} from 'read-chunk';
import isBmp from './index.js';

const check = filename => isBmp(readChunkSync(filename, {length: 4}));

test('detects BMP from Buffer', t => {
	t.true(check('fixture.bmp'));
	t.false(check('fixture.png'));
});

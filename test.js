import test from 'ava';
import readChunk from 'read-chunk';
import m from '.';

const check = filename => m(readChunk.sync(filename, 0, 4));

test('detects BMP from Buffer', t => {
	t.true(check('fixture.bmp'));
	t.false(check('fixture.png'));
});

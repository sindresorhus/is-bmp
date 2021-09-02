export default function isBmp(buffer) {
	if (!buffer || buffer.length < 2) {
		return false;
	}

	return buffer[0] === 66 && buffer[1] === 77;
}

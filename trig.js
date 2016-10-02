'use strict'

function toTrianglePath(a, b, c, d) {
	if (isNumber(a) && isNumber(b) && isNumber(c) && isNumber(d)) {
		return 'm ' + a + ' ' + b + ' m ' + c + ' ' + d + ' ' + 'z';
	}
	throw new Error('Invalid input. Should be numeric values.');
}

function isNumber(input) {
	return (typeof input === 'number');
}
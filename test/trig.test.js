'use strict'

describe('trig', function(){

	it('should return a path string formatted for a triangle for positive numbers', function() {
		var pathString = toTrianglePath(1, 2, 3, 4);
		expect(pathString).toBe('m 1 2 m 3 4 z');
	});

	it('should return a path string formatted for a triangle for positive numbers', function() {
		var pathString = toTrianglePath(5, 6, 7, 8);
		expect(pathString).toBe('m 5 6 m 7 8 z');
	});

	it('should return a path string formatted for a triangle for negative numbers', function() {
		var pathString = toTrianglePath(-1, -2, -3, -4);
		expect(pathString).toBe('m -1 -2 m -3 -4 z');
	});
})
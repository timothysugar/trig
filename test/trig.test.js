describe('trig', function(){

	it('should return a path string formatted for a triangle', function() {
		var pathString = toTrianglePath(1, 2, 3, 4);
		expect(pathString).toBe('m 1 2 m 3 4 z');
	})

})
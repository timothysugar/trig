var trig = (function () {
	'use strict' 

	function _toTrianglePath(a, b, c, d) {
		if (_isNumber(a) && _isNumber(b) && _isNumber(c) && _isNumber(d)) {
			return 'm ' + a + ' ' + b + ' m ' + c + ' ' + d + ' ' + 'z';
		}
		throw new Error('Invalid input. Should be numeric values.');
	}

	function _isNumber(input) {
		return (typeof input === 'number');
	}

	return {
		toTrianglePath: _toTrianglePath
	};

})();
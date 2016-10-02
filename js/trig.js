var trig = (function () {
	'use strict' 

	function _buildPath() {
		var lengthA = parseInt(document.getElementById('length-a').value);
		var lengthB = parseInt(document.getElementById('length-b').value);
		var resultPath = _toTrianglePath(lengthA, 0, 0, lengthB);
		document.getElementById('path').value = resultPath;
	}

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
		buildPath: _buildPath,
		toTrianglePath: _toTrianglePath
	};

})();
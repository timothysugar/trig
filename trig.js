'use strict'

window.trig = window.trig || {};

(function() {
	var createPathString = function() {
		var a = document.getElementById('a').value;
		var b = document.getElementById('b').value;
		var c = document.getElementById('c').value;
		var d = document.getElementById('d').value;
		document.getElementById('result').innerHTML = 'm ' + a + ' ' + b + ' m ' + c + ' ' + d + ' ' + 'z';
	};

	window.trig.init = function() {
		document.getElementById('path').addEventListener('click', createPathString);
	};
})();
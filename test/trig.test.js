describe('trig', function(){

	beforeEach(function() {
		var fixture = '<div id="fixture">' + 
		'<input id="a" type="text">' + 
		'<input id="b" type="text">' + 
		'<input id="c" type="text">' + 
		'<input id="d" type="text">' + 
		'<input id="path" type="button" value="format path string">' +
		'Result: <span id="result" /></div>';

		document.body.insertAdjacentHTML(
			'afterbegin', 
			fixture);
	});

	// remove the html fixture from the DOM
	afterEach(function() {
		document.body.removeChild(document.getElementById('fixture'));
	});

	// call the init function of trig to register DOM elements
	beforeEach(function() {
		window.trig.init();
	});

	it('should return a path formatted string', function() {
		document.getElementById('a').value = 1;
		document.getElementById('b').value = 2;
		document.getElementById('c').value = 3;
		document.getElementById('d').value = 4;
		document.getElementById('path').click();
		expect(document.getElementById('result').innerHTML).toBe('m 1 2 m 3 4 z');
	});

})
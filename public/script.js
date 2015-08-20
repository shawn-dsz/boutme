document.getElementById('myButton').onclick = function() {


	var xhr = new XMLHttpRequest();


	xhr.open('POST', '/add');
	xhr.setRequestHeader('Content-Type', 'application/json');

	xhr.responeType = 'json';

	xhr.onload = function() {
		alert(xhr.response);
	};


	xhr.send(JSON.stringify({
		a: 1,
		b: 2
	}));

};
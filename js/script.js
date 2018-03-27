const go = (e) => {
	window.scroll({
		top: document
			.querySelector( e )
			.offsetTop - 39,
		left: 0,
		behavior: 'smooth'
	});
	document.getElementById("trigg").checked = false;
}
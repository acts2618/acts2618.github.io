$(document).ready(function(){
	$('.nav a[href^="#"]').on('click', function(e) {
		e.preventDefault();
		document.getElementById("trigg").checked = false;
		var id = $(this).attr('href'),
				targetOffset = $(id).offset().top;

		$('html, body').animate({ 
			scrollTop: targetOffset
		}, 500);
	});
});

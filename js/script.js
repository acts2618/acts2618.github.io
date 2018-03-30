$(document).ready(function () {
	$('a[href^="#"]').on('click', function (e) {
		e.preventDefault();
		document.getElementById("trigg").checked = false;
		var id = $(this).attr('href'),
				targetOffset = $(id).offset().top;

		$('html, body').animate({
			scrollTop: targetOffset
		}, 500);
	});
    
    /* pagina de contato */
    window.onload = function () {
        var footer = document.getElementById('footer').offsetHeight,
            menu = document.getElementById("menu").offsetHeight,
            econtato = document.getElementById("contato"),
            altura = "calc(100vh - 12rem - "+menu+"px - "+footer+"px);",
            padding = "calc(6rem + "+menu+"px);";
        econtato.style.cssText=
            "min-height:"+altura+"; padding-top:"+padding;
    }
});
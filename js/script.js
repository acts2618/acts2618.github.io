$(document).ready(function () {

    /*  Seletor de plataforma para download
    --------------------------------------------- */
    $('.download-seletores div a').on('click', function (e) {
		e.preventDefault();
        var type = $(this).attr('rel');
        if (type === 'windows') {
            $("#windows").show(0);
            $("#linux").hide(0);
            $("#apple").hide(0);
            $('#seletor-windows i').css('color', '#767676');
            $('#seletor-linux i').css('color', '#7DCEE8');
            $('#seletor-apple i').css('color', '#7DCEE8');
        }
        if (type === 'linux') {
            $("#windows").hide(0);
            $("#linux").show(0);
            $("#apple").hide(0);
            $('#seletor-windows i').css('color', '#7DCEE8');
            $('#seletor-linux i').css('color', '#767676');
            $('#seletor-apple i').css('color', '#7DCEE8');
        }
        if (type === 'apple') {
            $("#windows").hide(0);
            $("#linux").hide(0);
            $("#apple").show(0);
            $('#seletor-windows i').css('color', '#7DCEE8');
            $('#seletor-linux i').css('color', '#7DCEE8');
            $('#seletor-apple i').css('color', '#767676');
        }
    });
    
    /*  Efeito de rolagem e fechamento do menu ao clicar
    --------------------------------------------- */
	$('a[href^="#"]').on('click', function (e) {
		e.preventDefault();
		document.getElementById("trigg").checked = false;
		var id = $(this).attr('href'),
				targetOffset = $(id).offset().top;

		$('html, body').animate({
			scrollTop: targetOffset
		}, 500);
	});
    
    /*  Ajusta a altura mínima do MAIN
    --------------------------------------------- */
    window.onload = function () {
        var footer = document.getElementById('footer').offsetHeight,
            main = document.getElementById("main"),
            altura = "calc(100vh - "+footer+"px)";
        main.style.cssText = "min-height:"+altura+";";
    }
    
});
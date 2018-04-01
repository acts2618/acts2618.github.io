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
            $('#seletor-windows').removeClass('download-sd').addClass('download-sa');
            $('#seletor-linux').removeClass('download-sa').addClass('download-sd');
            $('#seletor-apple').removeClass('download-sa').addClass('download-sd');
        }
        if (type === 'linux') {
            $("#windows").hide(0);
            $("#linux").show(0);
            $("#apple").hide(0);
            $('#seletor-windows').removeClass('download-sa').addClass('download-sd');
            $('#seletor-linux').removeClass('download-sd').addClass('download-sa');
            $('#seletor-apple').removeClass('download-sa').addClass('download-sd');
        }
        if (type === 'apple') {
            $("#windows").hide(0);
            $("#linux").hide(0);
            $("#apple").show(0);
            $('#seletor-windows').removeClass('download-sa').addClass('download-sd');
            $('#seletor-linux').removeClass('download-sa').addClass('download-sd');
            $('#seletor-apple').removeClass('download-sd').addClass('download-sa');
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
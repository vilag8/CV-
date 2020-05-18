var $overlay = $('<div class="overlay"></div>')
$('.container').append($overlay);

$('.contact').click(function () { 
    $($overlay).show();
});

var $divoverlay = $('<div class="divoverlay"><h3>Inviami una mail a <a href="mailto:vi_lag@hotmail.it">vi_lag@hotmail.it</a></h3><br><h3>oppure contattami al numero <a href="tel:+393461068831">3461068831</a></h3></div>')
var $closediv = $('<div class="closediv"><a href="#">X</a></div>')
$('.overlay').append($divoverlay);
$($divoverlay).append($closediv);

$($closediv).click(function (e) { 
    $($overlay).hide();
});
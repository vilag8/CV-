//CREO UN DIV PER L'OVERLAY E LO AGGIUNGO AL .CONTAINER
var $overlay = $('<div class="overlay"></div>')
$('.container').append($overlay);

//QUANDO CLICCO SUL TASTO CONTATTAMI COMPARE L'OVERLAY
$('.contact').click(function () { 
    $($overlay).fadeIn();
});

//AGGIUNGO UN ULTERIORE DIV ALL'INTERNO DELL'OOVERLAY CON GLI ESTREMI PER IL CONTATTO
var $divoverlay = $('<div class="divoverlay"><h3>Inviami una mail a <a href="mailto:vi_lag@hotmail.it">vi_lag@hotmail.it</a></h3><br><h3>oppure contattami al numero <a href="tel:+393461068831">3461068831</a></h3></div>')
//AGGIUNGO NELL'ULTIMO DIV IL TASTO X PER CHIUDERE IL POP-UP APERTO
var $closediv = $('<div class="closediv"><a href="#">X</a></div>')
$('.overlay').append($divoverlay);
$($divoverlay).append($closediv);
//AL CLICK SULLA X IL DIV SCOMPARE LENTAMENTE
$($closediv).click(function (e) { 
    $($overlay).fadeOut();
});

//VERSIONE SCURA
$('#black-version').click(function (e) { 
    //AGGIUNGO E TOLGO UNA CLASSE AD OGNI CLICK
    $('body').toggleClass('body--black');
    $('a').toggleClass('a--black');
});

//QUANDO ESCI DAL CONTAINER ATTIVA L'OVERLAY DEI CONTATTI
$('.container').mouseleave(function () { 
    $($overlay).fadeIn();
});
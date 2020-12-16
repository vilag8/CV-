//ANIMAZIONE LIBRERIA SCROLLREVEAL
ScrollReveal().reveal('.headline', { distance: '150px', duration: 1500, easing: 'cubic-bezier(.215, .61, .355, 1)', interval: 400  });
ScrollReveal().reveal('.zoom', {duration: 1000, easing: 'cubic-bezier(.215, .61, .355, 1)', interval: 400, scale: 0.65 });


//CREO UN DIV PER L'OVERLAY E LO AGGIUNGO AL .CONTAINER
var $overlay = $('<div class="overlay"></div>')
$('.container').append($overlay);

//QUANDO CLICCO SUL TASTO CONTATTAMI COMPARE L'OVERLAY
$('.contact').click(function () { 
    $($overlay).fadeIn();
});

//AGGIUNGO UN ULTERIORE DIV ALL'INTERNO DELL'OOVERLAY CON GLI ESTREMI PER IL CONTATTO
var $divoverlay = $('<div class="divoverlay"><h3>Inviami una mail a <a href="mailto:vi_lag@hotmail.it">vi_lag@hotmail.it</a></h3><br><h3>oppure contattami al numero <a href="tel:+39346------">346000000</a></h3></div>')
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
    $('.cursor').toggleClass('border', 'blue');
});

//QUANDO IL MOUSE ESCE DAL CONTAINER ATTIVA L'OVERLAY DEI CONTATTI
$('.container').mouseleave(function () { 
   $($overlay).fadeIn();
});

//MOUSE FORMA CIRCOLARE
//NASCONDO LA FRECCIA STANDARD NEL FOGLIO CSS
$(window).mousemove(function (e) { 
    $('.cursor').css('top', e.pageY);
    $('.cursor').css('left', e.pageX);
});

//QUANDO IL MOUSE PASSA SOPRA I LINK INGRANDISCI E COLORA IL CURSORE AGGIUNGENDO UNA CLASSE
$('a').mouseover(function () { 
    $('.cursor').addClass('cursor_link');
});

//QUANDO IL MOUSE LASCIA I LINK TOGLI LA CLASSE IL CURSORE
$('a').mouseleave(function () { 
    $('.cursor').removeClass('cursor_link');
});

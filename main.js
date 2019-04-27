$(document).ready(function() {

    $('.search-small__btn').click(function(){
        $('.search-small').addClass('search-small--open');
        $('.navbar__toggler').addClass('navbar__toggler--hidden');

    })
    $('.search-small__close').click(function(){
        $('.search-small').removeClass('search-small--open');
        $('.navbar__toggler').removeClass('navbar__toggler--hidden');
    })

    $('.navbar__toggler').click(function () {
        $('.navbar').addClass('show'); 
    })
    $('.search-small__close').click(function () {
        $('.navbar').removeClass('show');
    })
})
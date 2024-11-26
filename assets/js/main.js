$(document).ready(function() {
    $('div').hide();
    $('div').text('Hello World');
    $('div').addClass('info');
    $('.info').show();
    $('div').css('color', 'red');

//filtros
    $('ul.my-list>li>a:first').text('First');
    $('ul.my-list>li>a:first').attr('href', 'http://www.google.com');
    $('ul.my-list>li>a:eq(4)').text('Last');
});
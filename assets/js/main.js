$(document).ready(function() {
    $('div').hide();
    //$('div').text('Hello World');
    $('div').addClass('info');
    $('.info').show();
    //$('div').css('color', 'red');

//filtros
    $('ul.my-list>li>a:first').text('First');
    $('ul.my-list>li>a:first').attr('href', 'http://www.google.com');
    $('ul.my-list>li>a:eq(4)').text('a');
   // $('ul.my-list>li>a:lt(5)').attr('target', '_blank');


    $('input[type="checkbox"]:checked').fadeOut();

    console.log($('ul.my-list>li').length);

    var link = $('a[href]')[0];

    alert(link.href);


    $('ul.my-list').appendChild('<li></li>');
    $('ul.my-list>li>a:last').text('last');
    $('ul.my-list>li>a:last').attr('href','www.github.com')
    $('ul.my-list:last').attr('target', '_blank');
    
    
});


    $('p').hover(function(){
        $('p').text('control de version');
        $('p').css('color','blue');
    },
    function(){
        $('p').css('color', 'black');
    });

$('li').click(function(){
    alert('waa')
})

$('#btn').click(function(){
    console.log('sss')
})

$('#div1').click(function(){
    $(this).addClass('clicked');
}).find('span').attr('title', 'this is a titlee');

$('#btnShow').click(function(){
    $('.hidden').show('slow');
})
$('#btnHide').click(function(){
    $('.hidden').hide();
})

$('.animate').click(function(){
    $(this).animate({
        'left': '+=30px',
        'width': '300px',
        'height': '300px',
        'font-size': '50px',
        'opacity': '-=0.1',
    })
})
$('li').click(function(){
    alert('waa')
})

$('#btn').click(function(){
    console.log('sss')
})

$('#div1').click(function(){
    $(this).addClass('clicked');
}).find('span').attr('title', 'this is a titlee');

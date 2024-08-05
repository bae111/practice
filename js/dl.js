$(function(){
    $('dl dt').on('click',function(){
        $('+dd',this).slideDown(800).siblings('dd').slideUp(800)
    })
    $('dl dd').on('click',function(){
        $(this).slideUp(800)
    })
})
$(function(){
    $('#open-btn').on('click',function(){
        $('#popup-box').addClass('show');
    });
    $('#close-bth').on('click',function(){
        $('#popup-box').removeClass('show');
    });
});
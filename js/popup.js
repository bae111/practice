/*.5초 간격으로 왼쪽 상단 기준으로 커지면서 나타나고 작아지며 사라짐*/
// $(function(){
//     $('#open-btm').on('click',function(){
//         $('#popup-box').show(500);
//     });
//     $('#popup-box > span').on('click',function(){
//         $('#popup-box').hide(500);
//     });
// });


/*1초 간격으로 나타나고 사라짐*/
// $(function(){
//     $('#open-btm').on('click',function(){
//         $('#popup-box').fadeIn(1000); 
//     });
//     $('#popup-box > span').on('click',function(){
//         $('#popup-box').fadeOut(1000);
//     });
// });

/*1초 간격으로 아래로 슬라이드 내려오고 올라감*/
// $(function(){
//     $('#open-btm').on('click',function(){
//         $('#popup-box').slideDown(1000); 
//     });
//     $('#popup-box > span').on('click',function(){
//         $('#popup-box').slideUp(1000);
//     });
// });
$(function(){
    $('#open-btm').on('click',function(){
        $('#popup-box').addClass('show'); 
    });
    $('#popup-box > span').on('click',function(){
        $('#popup-box').removeClass('show');
    });
});
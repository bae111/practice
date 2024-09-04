// $(function(){

//     const hoverImg = [
//         './img/img_04.png',
//         './img/img_05.png',
//         './img/img_06.png'
//     ];

//     $('#img_list li a img').each(function(index, el){
//         const originalSrc = $(this).data('origin');
//         console.log(originalSrc);

//         $(this).on('mouseenter', function(){
//             $(this).attr('src', hoverImg[index]);
//         });

//         $(this).on('mouseleave', function(){
//             $(this).attr('src', originalSrc);
//         });
//     });
// });

// $(function(){
//     $('#img_list li a img').on('mouseenter', function(){
//         $(this).attr('src', $(this).data('img'));
//     });

//     $('#img_list li a img').on('mouseleave', function(){
//         $(this).attr('src', $(this).data('origin'));
//     });
// });

// 인데 주어가 같으니까 다시 축약 가능

// 마우스엔터 = 클릭 같은 이벤트
// 온 = 메서드
// this = 주어 중 방금 이벤트를 터뜨린 애가 / 이미지 중에서 이벤트 터진애가
// attr = 메서드 속성변경
// src는 이미지 속성 / 변경할건데 변경할 속성이 src고
// 이벤트 터뜨린 애를 데이터 이미지라는 애로 바꿀거다 data 중에 img. 그래서 이미지 4로 바뀜
// 바뀔 속성과 바꿔치기 할 거를 써주는거임 attr에다가.
// this의 형제들 중에 title이라는 class를 가진애야 
// 태그를 바꿔치기 할거야 
// html (제이쿼리) = 이너html (자바스크립트)
// 이너html은 아예 바꿔치기.
// 방금전에 이벤트 터뜨린 애 중에 타이틀의 데이터를 가져온다
// 이미지 데이터 세팅된거중에 타이틀이라는 애를 가져오겠다
// 가져와서 html 하고 태그가 들어가던지 문자가 들어가던지 해야되는데 그 자리에 데이터 타이틀을 가져온거임


$(function(){
    $('#img_list li a img').on('mouseenter', function(){
        $(this).attr('src', $(this).data('img')).siblings('.title').html($(this).data('title')); //데이터 중에 타이틀을 가져와서 밀어넣어 // 자바에서는 data가 데이터셋이라고 씀
    }).on('mouseleave', function(){
        $(this).attr('src', $(this).data('origin')).siblings('.title').html($(this).data('alt'));
    });
});
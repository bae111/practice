$(function(){

    const hoverImg = [
        './img/img_04.png',
        './img/img_05.png',
        './img/img_06.png'
    ];

    $('#img_list li a img').each(function(index, el){
        const originalSrc = $(this).data('origin');
        console.log(originalSrc);

        $(this).on('mouseenter', function(){
            $(this).attr('src', hoverImg[index]);
        });

        $(this).on('mouseleave', function(){
            $(this).attr('src', originalSrc);
        });
    });
    // 콜백함수 : 다른 함수에 인수로 전달되어 실행되는 함수
    // each : 지정된 함수가 각 요소에 대해 한번씩 호출됨, 가지고 있는 애들 다 뿌려줌
    // index : 현재 순회중인 요소의 인덱스 (배열 : 숫자로 나옴, 객체key : 키값이 나옴)
    // value/element(el) : 현재 순회 중인 요소의 값 (this)
    // 이 경우 each 함수 안에서 함수가 인수로 전달된 것
    // 태그를 엘리멘트라고 함
    // 인덱스가 엘리멘트가 전달이 됨
});
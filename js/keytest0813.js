// $(function(){
//     $('#stopBtn').on('click',function(){
//         $('.any-02').css({'backgroundColor' : '#fff' , 'animationPlayState' : 'paused'});
//     });
//     $('#startBtn').on('click',function(){
//         $('.any-02').css({'backgroundColor' : '#333' , 'animationPlayState' : 'running'});
//     });
// });

// $('.any-02').css('background-color','#fff'); = 단일형태
// $('.any-02').css({'backgroundColor' : '#333', 'boder-radius' : '40%'}) = 복수형태
//복수로 들어갈 때는 제이슨 형태로 들어간다.
//제이슨형태는 무조건 중괄호 안에 들어감.
//제이슨형태 = 하이픈 빠지고 카멜케이스
//css 변경이 자유로움
//돌다가 스탑 누르면 안이 하얀색이 되고 멈추고
//스타트 누르면 333되고 다시 돌아야함

//img-01 누르면 이미지 바뀌고 라운드 조금 네모낳게
//img-02 누르면 이미지 바뀌고 라운드 동그랗게
//url 사용 시 주소는 "" 안에 적어야 함

$(function(){
    $('#stopBtn').on('click',function(){
        $('.any-02').css({'backgroundImage' : 'url("../img/one-1.jpg")' , 'border-radius' : '30%'});
    });
    $('#startBtn').on('click',function(){
        $('.any-02').css({'backgroundImage' : 'url("../img/one-2.jpg")' , 'border-radius' : '50%'});
    });
});
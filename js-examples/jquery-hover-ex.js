$(document).ready(function(){
    $(selector).hover(
        function() {  // 첫 번째 콜백 함수: hover in (마우스가 요소 위로 들어갔을 때, 마우스가 선택한 요소로 들어갔을 때 실행)
            // hover in 처리 코드
        },
        function() {  // 두 번째 콜백 함수: hover out (마우스가 요소에서 벗어났을 때, 마우스가 선택한 요소를 벗어났을 때 실행)
            // hover out 처리 코드
        }
    );
    
});

// 예시
// .cover가 .caption과 형제가 아닐 경우 (형제일 경우 css에서 +로 처리하거나 $(this).siblings('.caption').css('bottom', '0px');)
$(document).ready(function(){
    $('.cover').hover(
        function() {
            // 마우스가 .cover 위로 들어갔을 때 실행되는 코드
            $(this).closest('.wrap').find('.caption').css('bottom', '0');
        },
        function() {
            // 마우스가 .cover에서 벗어났을 때 실행되는 코드
            $(this).closest('.wrap').find('.caption').css('bottom', '-100px');
        }
    );
});

// jQuery hover() 메서드 공식 문서에 따르면, .hover() 메서드는 두 개의 콜백을 받아 첫 번째는 hover in, 두 번째는 hover out에 대응한다고 명시되어 있음.
// hover 이벤트 자체는 mouseenter와 mouseleave를 모두 포함하므로, 이벤트 핸들러에 if와 else를 사용하는 방식으로는 직접적으로 구현할 수 없음.
// if-else문을 사용하고 싶으면

$(document).ready(function() {
    $('.cover').hover(
        function() {
            // hover in: 마우스가 .cover 위에 올려졌을 때
            var caption = $(this).closest('.wrap').find('.caption');
            if (caption.length) { // caption이 존재할 때만 bottom을 설정
                caption.css('bottom', '0');
            }
        },
        function() {
            // hover out: 마우스가 .cover를 벗어났을 때
            var caption = $(this).closest('.wrap').find('.caption');
            if (caption.length) { // caption이 존재할 때만 bottom을 변경
                caption.css('bottom', '-100px');
            }
        }
    );
});
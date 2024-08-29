const creatKey = document.querySelector('#creatKey');
const creatKeyBtn = document.querySelector('#creatKeyBtn');
const checkKey = document.querySelector('#checkKey');
const checkKeyBtn = document.querySelector('#checkKeyBtn');
const checkNumberDiv = document.querySelector('.checkNumberDiv');

let randomNumber;


creatKeyBtn.addEventListener('click', function(){
    randomNumber = randomSixNumber();
    creatKey.textContent = randomNumber;
    checkKey.value = '';
    checkNumberDiv.classList.remove('disable');
    checkKeyBtn.textContent = '확인';
    checkKey.disabled = false;
    checkKeyBtn.disabled = false;       
});

checkKeyBtn.addEventListener('click', checkSixNumber);

checkKey.addEventListener('keyup', function(event){
    if(event.key === 'Enter'){
        checkSixNumber();
    }
    // event -> 이벤트 객체, 함수의 매개변수 전달.
    // 사용자의 특정 동작에 대한 정보를 포함, 다양한 이벤트 관련 데이터 접근 가능.
});

function randomSixNumber(){
    return Math.floor(100000 + Math.random() * 900000); 
}

function checkSixNumber(){
    let inputSixNumber = checkKey.value;
    if(randomNumber == inputSixNumber){
        alert('인증되었습니다.');
        checkNumberDiv.classList.add('disable');
        checkKeyBtn.textContent = '인증 완료';
        checkKey.disabled = true;
        checkKeyBtn.disabled = true;        
    }else{
        alert('인증번호가 틀렸습니다.');
    }
}
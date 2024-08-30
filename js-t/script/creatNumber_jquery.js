let randomNumber;


$('#creatKeyBtn').on('click', function(){
    randomNumber = randomSixNumber();
    $('#creatKey').text(randomNumber);
    $('#checkKey').val('').prop('disabled', false);
    $('.checkNumberDiv').removeClass('disable');
    $('#checkKeyBtn').prop('disabled', false).text('확인');
})

$('#checkKeyBtn').on('click', checkSixNunmer);

$('#checkKey').on('keyup', function(event){
    if(event.key === 'Enter'){
        checkSixNunmer();
    }
})

function randomSixNumber(){
    return Math.floor(100000 + Math.random() * 900000);
}

function checkSixNunmer(){
    let inputSixNumber = $('#checkKey').val();
    if(randomNumber == inputSixNumber){
        alert('인증되었습니다.');
        $('#checkKeyBtn').text('인증완료').prop('disabled', true);
        $('.checkNumberDiv').addClass('disable');
        $('#checkKey').prop('disabled', true);
    }else{
        alert('인증번호가 틀렸습니다.');
    }
}

console.log(randomSixNumber());
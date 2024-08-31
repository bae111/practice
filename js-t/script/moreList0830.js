const nikeList = document.querySelector('#nike_list');
const items = [['./img/img_04.png', '나이키 인빈서블', '209,000원'],
                ['./img/img_05.png', '나이키 P-6000', '129,000원'],
                ['./img/img_06.png', '나이키 P-5400', '169,000원'],
                ['./img/img_07.png', '에어 조던 뮬', '129,000원'],
                ['./img/img_08.png', '에어 조던 1 로우', '159,000원'],
                ['./img/img_09.png', '에어 조던 4 RM', '179,000원'],
                ['./img/img_04.png', '나이키 인빈서블', '209,000원'],
                ['./img/img_05.png', '나이키 P-6000', '129,000원'],
                ['./img/img_06.png', '나이키 P-5400', '169,000원']
            ];
            // 서버에서 넘어오는 정보

let currentIndex = 0; // 전역변수

function addListItem(){
    let newItem = '';
    for(let i = 0; i < 3 && currentIndex < items.length; i++){
        newItem += `<li><a href="#"><img src="${items[currentIndex][0]}" alt="${items[currentIndex][1]}"><span>${items[currentIndex][1]}</span><span>${items[currentIndex][2]}</span></a></li>`;
        currentIndex++;
    }
    if(currentIndex >= items.length){
        document.querySelector('#more_btn').style.display = 'none';
    }
    nikeList.insertAdjacentHTML('beforeend', newItem);
    // insertAdjacentHTML -> 메서드, 지정한 위치에 HTML을 삽입하는 역할을 함. 두개의 인자를 받음.

    // --beforebegin --p요소 바로 앞에 html 삽입 
    // <p>
    // --afterbegin --p요소 첫번째 자식 바로 앞에  html 삽입
    // <span>Hello World!</span>
    // --beforeend --p요소 마지막 자식 바로 다음에 html 삽입
    // </p>
    // --afterend --p요소 바로 다음에 html 삽입
}

document.querySelector('#more_btn').addEventListener('click',addListItem);
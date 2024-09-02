const navi = [
    {
        menuName : 'naver',
        url : 'https://www.naver.com',
        target : '_blank'
    },
    {
        menuName : 'daum',
        url : 'https://www.daum.net',
        target : '_blank'
    },
    {
        menuName : 'google',
        url : 'https://www.google.com',
        target : ''
    }
];

let tags = '';

for(i in navi){
    tags += `
                <li>
                    <a href="${navi[i].url}" target="${navi[i].target}">${navi[i].menuName}</a>
                </li>
            `;
}

document.querySelector('#nav').innerHTML = tags;
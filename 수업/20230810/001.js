const person = {
  name: '재현',
  age: 20,
  gender: 'male'
};

// for(x in person){
//     console.log(`${x} : ${person[x]}`)
// }

const props = Object.keys(person);
console.log(props)

for(let i = 0; i < props.length; i++){
    console.log(`key: ${props[i]}, value : ${person[props[i]]}`)
    //person.props[i] 가 안되는 이유는 키 값이 문자열로 들어오기 때문
    //문자열로 들어오기 때문에 대괄호를 써야 제대로 들어온다.
    console.log(props[i])
    console.log(person[props[i]])
}

const menu = [
            { name: "아메리카노", price: 2000 },
            { name: "카페라떼", price: 2500 },
            { name: "카페모카", price: 2800 },
            { name: "핫초코", price: 3000 },
            { name: "과일주스", price: 3500 },
        ];

        let input = 0;

        while (input !== -1) {
            input = parseInt(prompt(' 메뉴를 선택해주세요 : 아메리카노 : 1 / 카페라떼 : 2 / 카페모카 : 3 / 핫초코 : 4 / 과일주스 : 5 / 종료하기 : -1 '));

            switch (input) {
                case 1:
                    console.log(`${menu[0].name} : ${menu[0].price}`);
                    break;
                case 2:
                    console.log(`${menu[1].name} : ${menu[1].price}`);
                    break;
                case 3:
                    console.log(`${menu[2].name} : ${menu[2].price}`);
                    break;
                case 4:
                    console.log(`${menu[3].name} : ${menu[3].price}`);
                    break;
                case 5:
                    console.log(`${menu[4].name} : ${menu[4].price}`);
                    break;
                case -1:
                    console.log(`종료합니다.`);
                    break;
                default:
                    console.log('잘못된 입력입니다.');
            }
        }
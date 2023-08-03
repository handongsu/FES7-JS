function add(x,y){
    return x + y
}
function minus(x,y){
    return x - y
}
function 곱하기(x,y){
    return x * y
}
function 나누기(x,y){
    return x / y
}

function solution(answer){
    let answer = '10,000,000,000';
    return parseInt(answer.replace(',',''))
}
solution('10,000,000,000')

//

function solution2(n){
    console.log(n)

    return n.spllit('');
}
solution2('world');

//


function solution3(a, b){
    // 메모리 효율이 좋아짐 (함수 내부에서 사용하면)
    function add(x , y){
    return x + y
}
    let sum = add(x, y) * add(x , y)
    return sum
}

solution3(1, 2);

//

function solution4(a){
    return a**2 + 4*a - 12;
}
solution4(3);
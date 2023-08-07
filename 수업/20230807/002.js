// 애러가 발생하지 않는 코드
// data.sort((a, b) => (a[key] > b[key] ? -1 : (a[key] < b[key] ? 1 : 0)))

let data = ['a', 'z', 'b', 'e'];
data.sort();

// 사전식 정렬이어서 아래와 같은 값은 정렬이 되지 않습니다!
let data12 = [1, 11, 2, 111, 22];
data2.sort();

// 지금 이해하시라고 드리는 코드는 아니고 실무 DB로 가지고 있으시라고 드리는 코드입니다!
// data.sort((a, b) => (a > b ? -1 : (a < b ? 1 : 0)))
// data.sort((a, b) => (a < b ? -1 : (a > b ? 1 : 0)))

// 여러분들이 자주 사용하는 코드
let data3 = [1, 11, 2, 111, 22];
data3.sort((a, b) => (a - b)); // 오름차순
data3.sort((a, b) => (b - a)); // 내림차순

// 원리
let test3 = [13, 9, 10, 2];
test3.sort((a, b) => {
    console.log(a, b)
})
// 출력해보면 a, b의 값이 순차적으로 들어갈 것 같지만 그렇지 않습니다.
// 9 13
// 10 9
// 2 10

let test4 = [13, 9, 10, 2];
test4.sort((a, b) => {
    console.log(a, b)
    console.log(a - b) // 0보다 작은 경우 a를 b보다 낮은 색인으로 정렬합니다. 즉, a가 먼저옵니다.
});

let test5 = [13, 9, 10, 2];
test5.sort((a, b) => {
    return a - b; // 작은 값이 앞으로 간다 => 오름차순
})
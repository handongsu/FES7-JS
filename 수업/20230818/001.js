//10이상의 숫자 개수 구하기
const count = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);

function countBiggerThanTen(numbers) {
    return numbers.reduce((a, c) => {
        if(c >= 10){
            console.log(a)
            console.log(c)
            return a + 1;
        }else return a
    },0)
}
console.log(count); 



//filter

function countBiggerThanTen(numbers){
    
}
//10이상의 숫자 개수 구하기

const count = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);

//reduce
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
    return numbers.filter((a) => a >= 10).length;
}
console.log(count); 

//forEach
function countBiggerThanTen(numbers) {
 let count = 0;
 numbers.forEach(a => {
   if (a >= 10) count++;
 });
return count;
}
console.log(count); 


//map
function countBiggerThanTen(numbers){
    let count = 0;
    numbers.map(a => {
        if(a >= 10) count++;
    });
    return count;
}
console.log(count);

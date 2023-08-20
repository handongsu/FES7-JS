function addElements(arr){
    if(arr.length === 0){
        return 0
    }
    arr[0] + addElements(arr.slice(1));
}
addElements([1,2,3,4]);

let obj = {one: 1, two : 2};
let {one: myNum, two: myNum2} = {one: 1, two : 2};
console.log(myNum, myNum2);

let arr = ["안","녕","하"]
const str = arr.reduce((a,c) => {
    return a = c + '1';
},[])
console.log(str)
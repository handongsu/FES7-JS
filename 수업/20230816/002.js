//문제1
var man = {
    name: '한동수',
    sayHi : function(){
        console.log('안녕하세요 저는 '+ this.name);
    }
}
man.sayHi();    //안녕하세요 저는 한동수

//문제2
var 자료 = {
    data : [1,2,3,4,5],
}
console.log(자료)
자료.전부더하기 = function(){
    console.log(this)
    console.log(this.data.reduce((a,c) => a+c, 0))
}
console.log(자료)
자료.전부더하기();

// 자료.전부더하기 = function(){
//     let sum = 0;
//     console.log(this)
//     this.data.forEach(function(a){
//         sum = sum + a;
//     });
//     console.log(sum)
// }


// function 기계(){
//   this.이름 = 'Kim'
// }
// var 오브젝트 = new 기계();

const num = 12345;

function answer(num){
    return num.toString().split('').reverse().map(c => c * 2);
}
answer();
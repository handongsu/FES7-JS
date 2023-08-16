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
    data : [1,2,3,4,5]
}

자료.전부더하기 = function(){
    let sum = 0;
    this.data.forEach(function(a){
        sum = sum + a;
    });
    console.log(sum)
}

자료.전부더하기();


// function 기계(){
//   this.이름 = 'Kim'
// }
// var 오브젝트 = new 기계();
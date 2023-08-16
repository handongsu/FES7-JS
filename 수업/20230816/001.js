var 오브젝트 = {
    data : "Kim",
    함수 : function(){      //오브젝트 내 함수 : 메소드
        console.log(this)   //오브젝트 내 함수 안에서 this를 쓰면 그 함수를 가지고 있는 오브젝트를 뜻한다.(나를 포함하고 있는)
    }
}
오브젝트.함수();    //{data: "Kim", 함수: f}

var 어쩌구 = {}

function 기계(){
    this.이름 = "Kim"
}
var 오브젝트 = new 기계();

var 오브젝트2 = {
    이름들 : ['김','이','박'],
    func : function(){
        console.log(this);
        오브젝트2.이름들.forEach(function(){
            console.log(this)
        })
    }
}
오브젝트2.func();

var 오브젝트3 = {
    이름들 : ['김','이','박'],
    func : function(){
        console.log(this);
        오브젝트2.이름들.forEach(()=>{  //arrow function 특징 : 내부의 this값을 변화시키지 않음(외부 this값 그대로 재사용가능)
            console.log(this)
        })
    }
}
오브젝트3.func();

//함수를 만드는 이유
//1. 코드들을 기능으로 묶고 싶을 때 사용
//2. 입출력 기능을 만들 때.
let num = prompt("숫자를 하나 입력해주세요");
if(num >= 18){
    alert('안녕하세요!')
}else if(num >= 10){
    alert('안녕! 반가워 꼬마친구!')
}else if(num < 10){
    alert('부럽다...');
}

let 성적 = prompt("숫자를 입력하세요");
성적>=90 ? "A" : 성적 >= 80 ? "B" : 성적>= 70 ? "C" : 성적 >= 60 ? "D" : "강해져서 돌아와라"

let num2 = prompt("숫자를 하나 입력해주세요");
num2 >= 18 ? "안녕하세요.": '';

 const score = parseInt(prompt('점수를 입력하세요'));

        switch (true) {
            case score >= 90:
                console.log("A");
                break;
            case score >= 80:
                console.log("B");
                break;
            case score >= 70:
                console.log("C");
                break;
            case score >= 60:
                console.log("D");
                break;
            default:
                console.log('강해져서 돌아와라');
        }


        const cars = ["BMW","Volvo","Hyundai","doyota"];
        let cars2 = '';

        cars2 = [...cars].toString();
        
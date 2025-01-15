// console.log("Hello, JavaScript!")

//변수 선언
let name = "홍길동";
let age =25;

//콘솔에 출력
console.log("안녕하세요!");
console.log("제 이름은" + name + "입니다");
console.log('저는 ${age}살 입니다.');

//변수 값 변경
name = "김창수";
console.log("새 이름: " + name);


//조건문 실습
let score = 85;

if(score >= 90){
    console.log("A 학점입니다.")
}else if(score >= 80){
    console.log("B 학점입니다.")
}else{
    console.log("더 열심히 공부합시다!")
}

//반복문 실습
for(let i =1; i <= 5; i++){
    console.log('안녕하세요! ${i}번째 인사입니다.');
    console.log(`안녕하세요! ${i}번째 인사입니다.`);
}

//사용자 이름 입력 받기
//let userName = prompt("당신의 이름은 무엇인가요");
// console.log(`안녕하세요, ${userName}님!`);
// alert(`반갑습니다. ${userName} 님!`);

//숫자 입력 받아 계산하기
let number =prompt("1부터 10 사이의 숫자를 입력하세요 :");
number = parseInt(number); //입력받은 문자열을 숫자로 변환
console.log(`입력하신 숫자는 ${number}입니다`);
alert(`입력하신 숫자의 제곱은 ${number * number}입니다`);

// 배열 생성
let fruits = ["사과", "바나나", "포도", "딸기"];

//배열의 길이 출력
console.log(`과일 목록에는 ${fruits.length}개의 항목이 있습니다.`);

//배열의 각 항목 출력
for(let i = 0; i < fruits.length; i++){
    console.log(`과일 ${i + i}: ${fruits[i]}`);

}

//새로운 과일 추가
fruits.push("오렌지");
console.log("새로운 과일이 추가되었습니다.", fruits);

//함수 정의
function greet(name){
    console.log(`안녕하세요, ${name}님!`);
    alert(`반갑습니다, ${name}님!`);
}

//함수 호출
let userName = prompt("당신의 이름은 무엇인가요?");
greet(userName);

// 도전 과제 1
let userAge = prompt("당신의 나이는 어떻게 되시나요?");
userAge = parseInt(userAge); // 문자열을 숫자로 변환

aws(userAge);

function aws(age) {
    console.log("안녕하세요.");
    alert(`지금 나이는 ${age}살입니다. 10년 후에는 ${age + 10}살이 됩니다.`);
}

//도전 과제2
let numberArray = [10, 20, 30, 40, 50];

    //배열 평균 계산
    let sum = 0;
    for(let i = 0; i < numberArray.length; i++){
        sum += numberArray[i];
    }

    let average = sum / numberArray.length

    console.log(`배열의 평균은 ${average}입니다.`);
    alert(`배열의 평균은 ${average}입니다.`)
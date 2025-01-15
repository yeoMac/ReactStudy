//요소 선택
let greeting = document.getElementById("greeting");
let button = document.getElementById("change-text");

//버튼 클릭 시 텍스트 변경
// button.addEventListener("click", function(){
//     greeting.textContent = "DOM 조작이 재미있어요! 아직 모르겠어요";
//     console.log("텍스트가 변경되었습니다!")
// });

button.addEventListener("click", function(){
    //랜덤 문장 배열
    let message = [
        "이제 텍스트가 변경되었습니다!",
        "자바스크립트로 DOM 조작은 재미있어요.",
        "버튼을 누를 때마다 텍스트가 바뀝니다.",
        "코딩은 도전과 모험의 연속입니다.",
        "오늘도 즐겁게 코딩하세요!"
    ];

    //랜덤 인덱스 선택
    let randomIndex = Math.floor(Math.random() * message.length);

    //텍스트 변경
    greeting.textContent = message[randomIndex];

    console.log(`텍스트가 "${message[randomIndex]}"로 변경되었습니다.`);
});

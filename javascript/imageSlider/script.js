var images = [
    'https://images.pexels.com/photos/2345678/pexels-photo-2345678.jpeg',
    'https://images.pexels.com/photos/3456789/pexels-photo-3456789.jpeg'
];
var num = 0;

function next() {
    var slider = document.getElementById('slider'); // 이미지 요소 가져오기
    num++; // 인덱스 증가
    if (num >= images.length) { // 배열의 끝을 초과하면
        num = 0; // 첫 번째 이미지로 돌아감
    }
    slider.src = images[num]; // 이미지 변경
}

function prev() {
    var slider = document.getElementById('slider'); // 이미지 요소 가져오기
    num--; // 인덱스 감소
    if (num < 0) { // 배열의 시작 이전으로 가면
        num = images.length - 1; // 마지막 이미지로 돌아감
    }
    slider.src = images[num]; // 이미지 변경
}

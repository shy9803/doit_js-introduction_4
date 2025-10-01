var pics = document.querySelectorAll(".pic"); // pic인 요소들을 가져와 pics 라는 변수에 저장
var lightbox = document.querySelector("#lightbox"); // 라이트 박스 영역(#lightbox)를 가져와 lightbox 변수에 저장
var lightboxImage = document.querySelector("#lightboxImage"); // 라이트 박스 요소 안에 있는 이미지(#lightboxImage)를 가져와 lightboxImage 변수에 저장

for(var i = 0; i < pics.length; i++) { // pics 배열에 있는 모든 이미지에서 반복
  pics[i].addEventListener("click", showLightbox); // 이미지 누르면 showLight 함수 실행
}

// 썸네일 이미지 클릭시 실행할 함수 (썸네일 이미지 클릭시 라이트 박스 영역에 표시)
function showLightbox() {
  var bigLocation = this.getAttribute("data-src");
  lightboxImage.setAttribute("src", bigLocation); // lightboxImage.src = bigLocation; 도 가능
  lightbox.style.display = "block"; // 라이트박스 이미지를 화면에 표시
}

// 화면 아무데나 누르면 라이트 박스 닫기
// [닫기] 버튼 별도 생성시, 변수에 저장 후 닫는 함수 연결
// 라이트 박스 너비, 높이 각 100% -> 화면 아무데나 누르면 라이트 박스 닫힘
lightbox.onclick = function() { // click 이벤트가 발생했을 때 실행할 함수 선언
  lightbox.style.display = "none"; // lightbox 요소를 화면에서 감춤
}

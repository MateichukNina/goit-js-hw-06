function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorBtn = document.querySelector("button.change-color");
const color = document.querySelector("span.color");
const body = document.querySelector("body")
colorBtn.addEventListener("click", getColor)
;

function getColor(){
 const randomColor = getRandomHexColor();
body.style.backgroundColor = randomColor;
color.textContent = randomColor;



}
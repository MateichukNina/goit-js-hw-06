function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const amountInput = document.querySelector("input[type='number']");
const boxes = document.querySelector("#boxes");

createBtn.addEventListener("click", handleCreate);

function handleCreate(){
  const amount = amountInput.value;
  createBoxes(amount);
}



function createBoxes(amount) {
  let size = 30;
  
  for (let i = 0; i < amount; i += 1){
    const box = document.createElement("div");
    
    box.classList.add("box");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.appendChild(box);
    size += 10;
  }
}

destroyBtn.addEventListener("click", destroyBoxes)

function destroyBoxes(){
boxes.innerHTML = "";
amountInput.value= "";
}


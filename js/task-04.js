const counter = document.querySelector("#counter")
let counterValue = document.querySelector("#value");
counterValue.textContent = 0;
const decBtn = counter.querySelector('button[data-action="decrement"]');
const incBtn = counter.querySelector('button[data-action="increment"]');

const handleDecBtn = () =>{
    counterValue.textContent = parseInt(counterValue.textContent) - 1;
}

const handleIncBtn = () =>{
    counterValue.textContent = parseInt(counterValue.textContent) + 1;
}

decBtn.addEventListener("click", handleDecBtn);
incBtn.addEventListener("click", handleIncBtn);
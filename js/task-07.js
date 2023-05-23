const inputSize = document.querySelector("#font-size-control");
const textOutput = document.querySelector("#text");

inputSize.addEventListener("input", (event) =>{
    const size = event.currentTarget.value;
    textOutput.style.fontSize = `${size}px`;
})
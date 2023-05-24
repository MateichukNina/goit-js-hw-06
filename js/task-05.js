const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
const defaultValue = "Anonymous";

textInput.addEventListener("input", (event) => {
    output.textContent = event.currentTarget.value;
    if(event.currentTarget.value === ''){
        output.textContent = defaultValue;  
    }
});

const textInput = document.querySelector("#validation-input");

textInput.addEventListener("blur", (event) => {
    const inputLength = parseInt(event.currentTarget.dataset.length);
    textInput.classList.remove("invalid", "valid");


    if(textInput.value.length < inputLength){
        textInput.classList.add("invalid");
    }
    else  {
    textInput.classList.add("valid");};
});
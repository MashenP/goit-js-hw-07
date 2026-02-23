const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');
nameInput.addEventListener("input", (event) => {
    const trimmedOutput = event.currentTarget.value.trim();
    nameOutput.textContent = trimmedOutput === "" ? "Anonymous" : trimmedOutput;
});



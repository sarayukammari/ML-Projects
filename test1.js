const getName = () => {
    const input = document.getElementById("input").value.trim();
    const greet = document.getElementById("greeting");
    const error = document.getElementById("error");

    if (input) {
        greet.textContent = `Hey there ${input}, how are you doing?`;
        greet.classList.remove("hidden");
        greet.classList.add("visible");
        error.classList.add("hidden");

    } else {
        error.classList.remove("hidden");
        greet.classList.remove("visible");
        greet.classList.add("hidden");
    }
};

document.getElementById("greetBtn").addEventListener("click", getName);

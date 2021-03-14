const recognition = new webkitSpeechRecognition();

const list = document.querySelector("ul");
const button = document.querySelector("button");
const dot = document.querySelector(".dot");
let speaking = false;

button.addEventListener("click", addProduct);

//Configuration for recognition api

recognition.continuous = true;
recognition.onresult = () => startSpeaking(event);

function addProduct() {
    dot.classList.toggle("show");

    if (speaking) {
        speaking = false;
        button.innerHTML = "Start speaking";
        recognition.stop();
    } else {
        speaking = true;
        button.innerHTML = "Stop speaking";
        recognition.start();
    }
}

function startSpeaking(event) {
    const current = event.resultIndex;
    console.log(event.results.length);

    for (let i = current; i < event.results.length; ++i) {
        let word = event.results[i][0].transcript;
        list.innerHTML += `<li>${word}</li>`
    }


}
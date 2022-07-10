let adviceId = document.getElementById("advice--id");
let adviceText = document.getElementById("advice--text");
let button = document.getElementById("advice--button");

function adviceRandom(min, max){
    return Math.floor(Math.random() * (max-min)) -min;
}

window.onload = e => {
    e.preventDefault();
    makeAdvice();
}

function makeAdvice() {
    const xhr = new XMLHttpRequest();
    xhr.onload = function(){
        if(xhr.status == 200){
            console.log("success!");
            adviceText.innerHTML = JSON.parse(this.response).slip.advice;
            adviceId.innerHTML = "Advice Number #" + JSON.parse(this.response).slip.id;
        }
    }
    xhr.open('GET', 'https://api.adviceslip.com/advice/'+adviceRandom(1, 224) , true);
    xhr.send();
}
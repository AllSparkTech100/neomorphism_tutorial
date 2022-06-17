// form js

let switchCtn = document.querySelector("#switch__ctn");
let switchC1 = document.querySelector("#switch__c1");
let switchC2 = document.querySelector("#switch__c2");
let switchCircle = document.querySelector(".switch__circle");

let switchBtn = document.querySelector(".switch__btn");
let aContainer = document.querySelector("#a__container");
let bContainer = document.querySelector("#b__container");
let allButtons = document.querySelector(".submit");

let getButtons = (e) => e.preventDefault();

let changeForm = (e) => {
    
    switchCtn.classList.add("is-gx");

    setTimeout(function () {
        switchCtn.classList.remove("is-gx");
    }, 1500);

    switchCtn.classList.toggle("is-txr");
    switchCircle[0].classList.toggle("is-txr");
    switchCircle[1].classList.toggle("is-txr");


    switchC1.classList.toggle("is-hidden");
    switchC2.classList.toggle("is-hidden");
    aContainer.classList.toggle("is-txl");
    bContainer.classList.toggle("is-txl");
    bContainer.classList.toggle("is-z200");
};

function mainF(e) {
    for (var i = 0; i < allButtons.length; i++)
        allButtons[i].addEventListener("click", getButtons);
    for (var i = 0; i < switchBtn.length; i++)
        switchBtn[i].addEventListener("click", changeForm);
};

window.addEventListener("load", mainF);
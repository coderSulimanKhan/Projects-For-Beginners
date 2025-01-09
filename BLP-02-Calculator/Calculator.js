let clickNumber;
let operator = "";
let numbers = [];

let display = document.querySelector("#display");
let clear = document.querySelector("#clear");
let equals = document.querySelector("#equals");
let showOperator = document.querySelector("#showOperator");

let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let four = document.querySelector("#four");
let five = document.querySelector("#five");
let six = document.querySelector("#six");
let seven = document.querySelector("#seven");
let eight = document.querySelector("#eight");
let nine = document.querySelector("#nine");
let zero = document.querySelector("#zero");
let dbzero = document.querySelector("#dbzero");
let dot = document.querySelector("#dot");

let plus = document.querySelector("#plus");
let minus = document.querySelector("#minus");
let mutiply = document.querySelector("#multiply");
let division = document.querySelector("#division");

window.onload = function () {
    display.value = "0";
};

one.addEventListener("click", () => {
    if (display.value == "0") {
        display.value = "";
    }
    clickNumber = 1;
    display.value += clickNumber;
});

two.addEventListener("click", () => {
    if (display.value == "0") {
        display.value = "";
    }
    clickNumber = 2;
    display.value += clickNumber;
});

three.addEventListener("click", () => {
    if (display.value == "0") {
        display.value = "";
    }
    clickNumber = 3;
    display.value += clickNumber;
});

four.addEventListener("click", () => {
    if (display.value == "0") {
        display.value = "";
    }
    clickNumber = 4;
    display.value += clickNumber;
});

five.addEventListener("click", () => {
    if (display.value == "0") {
        display.value = "";
    }
    clickNumber = 5;
    display.value += clickNumber;
});

six.addEventListener("click", () => {
    if (display.value == "0") {
        display.value = "";
    }
    clickNumber = 6;
    display.value += clickNumber;
});

seven.addEventListener("click", () => {
    if (display.value == "0") {
        display.value = "";
    }
    clickNumber = 7;
    display.value += clickNumber;
});

eight.addEventListener("click", () => {
    if (display.value == "0") {
        display.value = "";
    }
    clickNumber = 8;
    display.value += clickNumber;
});

nine.addEventListener("click", () => {
    if (display.value == "0") {
        display.value = "";
    }
    clickNumber = 9;
    display.value += clickNumber;
});

zero.addEventListener("click", () => {
    if (display.value == "0") {
        display.value = "";
    }
    clickNumber = 0;
    display.value += clickNumber;
});

dbzero.addEventListener("click", () => {
    if (display.value == "0") {
        display.value = "";
    }
    clickNumber = "00";
    display.value += clickNumber;
});

dot.addEventListener("click", () => {
    // if (display.value == "0") {
    //     display.value = "";
    // }
    clickNumber = ".";
    display.value += clickNumber;
});

plus.addEventListener("click", () => {
    numbers.push(Number(display.value));
    operator = "+";
    display.value = "";
    showOperator.innerText = "+";
});

minus.addEventListener("click", () => {
    numbers.push(Number(display.value));
    operator = "-";
    display.value = "";
    showOperator.innerText = "-";
});

mutiply.addEventListener("click", () => {
    numbers.push(Number(display.value));
    operator = "*";
    display.value = "";
    showOperator.innerText = "x";
});

division.addEventListener("click", () => {
    numbers.push(Number(display.value));
    operator = "/";
    display.value = "";
    showOperator.innerText = "/";
});

equals.addEventListener("click", () => {
    numbers.push(Number(display.value));
    display.value = eval(numbers.join(operator));
    numbers = [];
    console.log(numbers);
    showOperator.innerText = "=";
});

clear.addEventListener("click", () => {
    display.value = "0";
    numbers = [];
    clickNumber = null;
    showOperator.innerText = "";
});

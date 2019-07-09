const display = document.querySelector(".calculator .display");

document
  .querySelectorAll(".digits button")
  .forEach(digit => digit.addEventListener("click", digitPressed));

function digitPressed(ev) {
  display.value += ev.target.innerText;
}

document
  .querySelectorAll(".opers button")
  .forEach(oper => oper.addEventListener("click", operPressed));

function operPressed(ev) {
  display.value += ev.target.innerText;
}

document.querySelector(".equal").addEventListener("click", equalPressed);

function equalPressed() {
  display.value = eval(display.value);
}

document.querySelector(".clear").addEventListener("click", clearButton);

function clearButton() {
  display.value = "";
}

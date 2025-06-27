const display = document.getElementById("display");
const buttons = document.getElementById("btn-grid");

const validKeys = [
  "right_brack",
  "left_brack",
  "percent",
  "sev",
  "ei",
  "ni",
  "fo",
  "fi",
  "si",
  "one",
  "too",
  "thr",
  "ze",
  "dec",
  "divide",
  "x",
  "min",
  "plus",
];

buttons.addEventListener("click", (event) => {
  const clicked = event.target;
  // Only handle clicks on button elements with a valid class
  if (
    clicked.tagName === "BUTTON" &&
    [...clicked.classList].some((cls) => validKeys.includes(cls))
  ) {
    const getInsidesOfBtn = clicked.textContent;
    console.log(getInsidesOfBtn);
    display.value += getInsidesOfBtn;
  }
});

function calculate() {
  console.log(display.value);
  const result = eval(display.value);
  console.log(result);
  display.value = result;
}

function remove() {
  display.value = display.value.slice(0, -1);

  //0 = start at the first character.
  // -1 = stop before the last character.
  // So, it removes the last character.
  // If you want to remove more, use -2, -3, etc.
}

let removeInterval;
const delButton = document.querySelector('.del');

delButton.addEventListener('mousedown', ()=>{
  removeInterval = setInterval(remove, 100); //calls remove() every 100ms
});

delButton.addEventListener('mouseup', ()=>{
  clearInterval(removeInterval);
});

delButton.addEventListener('mouseleave', ()=>{
  clearInterval(removeInterval);
});

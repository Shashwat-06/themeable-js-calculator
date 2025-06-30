const display = document.querySelector(".displayValue");
const keys = document.querySelectorAll(".key");
const operator = document.querySelectorAll(".operator");
const mode = document.querySelector(".mode");
let style = document.querySelector("#style");
const delImg = document.querySelector("#deleteImg");
//--------------------------------------------------
// toggle between themes
mode.addEventListener("change", () => {
  if (mode.checked) {
    setTimeout(() => {
      style.setAttribute("href", "day.css");
      delImg.setAttribute("src", "assets/backspace.png");
    }, 100);
  }
  if (!mode.checked) {
    style.setAttribute("href", "style.css");
    delImg.setAttribute("src", "assets/backspaceWhite.png");
  }
});
//--------------------------------------------------
keys.forEach((btn) => {
  btn.addEventListener("click", () => {
    const val = btn.getAttribute("data-value");
    const operatorClass = btn.classList.contains("operator");
    const current = display.textContent;
    const lastChar = current.slice(-1);

    if (val === "c") {
      display.textContent = "0";
    } else if (val === "del") {
      const txt = display.textContent;
      display.textContent = txt.length > 1 ? txt.slice(0, -1) : "0";
    } else if (val === "**2") {
      display.textContent = eval(`${eval(display.textContent)}**2`);
    } else if (val === "=") {
      try {
        display.textContent = eval(display.textContent);
      } catch {
        display.textContent = "Syntax Error";
      }
    } else if (/^[0-9]$/.test(val)) {
      display.textContent =
        display.textContent === "0" ? val : display.textContent + val;
      //for default value of display that can only be changed if the input is non zero
    } else if (operatorClass == true) {
      if (
        lastChar != "+" &&
        lastChar != "-" &&
        lastChar != "*" &&
        lastChar != "/"
      ) {
        display.textContent = display.textContent + val;
      } else {
        display.textContent = display.textContent;
      } //for preventing consecutive operators
    } else {
      display.textContent += val;
    }
  });
});
//-----------------------------------------------------

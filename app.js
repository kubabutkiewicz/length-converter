const inputUnit = document.querySelectorAll('input[name="input-unit"]');
const outputUnit = document.querySelectorAll('input[name="output-unit"]');
const radio = document.querySelectorAll('input[type="radio"');
let inputChecked, outputChecked;
let inputValue;
const input = document.querySelector("#yourLength");
const toMeters = {
  milimeter: 0.001,
  centimeter: 0.01,
  decimeter: 0.1,
  meter: 1,
  kilometer: 1000
};
const fromMeters = {
  milimeter: 1000,
  centimeter: 100,
  decimeter: 10,
  meter: 1,
  kilometer: 0.001
};
const errorBox = document.querySelector(".alert");
function convertToMeters() {
  const resultOfConvert =
    inputValue * (toMeters[`${inputChecked}`] * fromMeters[`${outputChecked}`]);
  return resultOfConvert;
}

function detectChecked() {
  inputValue = document.querySelector("#yourLength").value;
  inputUnit.forEach(item => {
    if (item.checked) inputChecked = item.dataset.unit;
  });
  outputUnit.forEach(item => {
    if (item.checked) outputChecked = item.dataset.unit;
  });
}

function outputResult() {
  detectChecked();
  const result = convertToMeters();

  if (isNaN(result)) {
    errorBox.style.opacity = "1";
  } else {
    errorBox.style.opacity = "0";
    document.querySelector("#converted").value = result;
  }
}

input.addEventListener("input", outputResult);
radio.forEach(item => {
  item.addEventListener("change", outputResult);
});

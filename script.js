document.getElementById("box-button").addEventListener("click", function () {
  document.body.style.backgroundColor = randomColorChange();
  const colorCode = randomColorChange();
  document.getElementById("box-colorcode").textContent = colorCode;
  document.getElementById("box-button").style.backgroundColor = "rgb(65, 44, 2)";
});

function randomColorChange() {
  const colLetters = "0123456789abcdef";
  let firstColor = "#";
  let secondColor = "#";
  for (let i = 0; i < 6; i++) {
    firstColor += colLetters[Math.floor(Math.random() * 15)];
    secondColor += colLetters[Math.floor(Math.random() * 15)];
  }
  const gradient = `linear-gradient(${firstColor}, ${secondColor})`;
  document.body.style.background = gradient;
  console.log(gradient);
  return gradient;
}

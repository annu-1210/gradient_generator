document.getElementById("randomButton").addEventListener("click", function () {
  document.getElementById("randomColor-div").style.backgroundColor = randomColorChange();
  const colorCode = randomColorChange();
  document.getElementById("randomValues").textContent = colorCode;
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
  document.getElementById("randomColor-div").style.background = gradient;
  console.log(gradient);
  return gradient;
}

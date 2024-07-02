document.getElementById("box-button").addEventListener("click", function () {
  document.body.style.backgroundColor = handleColorChange();
  const colorCode = handleColorChange();
  document.getElementById("box-colorcode").textContent = colorCode;
});

function handleColorChange() {
  const colLetters = "0123456789abcdef";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += colLetters[Math.floor(Math.random() * 15)];
  }
  console.log(color);
  return color;
}

/*jshint esversion: 6 */
const input = document.getElementById("lbsInput");
const grams = document.getElementById("gramsOutput");
const kg = document.getElementById("kgOutput");
const oz = document.getElementById("ozOutput");
const stone = document.getElementById("stoneOutput");
const output_div = document.getElementById("output");
const resetBtn = document.getElementById("reset-btn");

input.addEventListener("input", (e) => {
  // output_div.classList.add("visibility-visible");

  let lbs = e.target.value;
  grams.innerHTML = lbs * 453.592;
  kg.innerHTML = lbs * 0.453592;
  oz.innerHTML = lbs * 16;
  stone.innerHTML = lbs * 0.0714286;
});

// reset button to clear input
resetBtn.addEventListener("click", () => {
  input.value = "";
  grams.innerHTML = 0;
  kg.innerHTML = 0;
  oz.innerHTML = 0;
  stone.innerHTML = 0;
});

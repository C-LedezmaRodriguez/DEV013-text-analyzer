import analyzer from "./analyzer.js";
//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer
const btnreset = document.getElementById("reset-button");
const texto = document.querySelector('textarea[name="user-input"]');
btnreset.addEventListener("click", function reset() {
  texto.value = "";
  document.querySelector("li[data-testid='word-count']").innerHTML =
    "Word-count: 0";
  document.querySelector("li[data-testid='character-count']").innerHTML =
    "Character-count: 0";
  document.querySelector(
    "li[data-testid='character-no-spaces-count']"
  ).innerHTML = "Character-no-spaces-count: 0";
  document.querySelector("li[data-testid='number-count']").innerHTML =
    "Number-count: 0";
  document.querySelector("li[data-testid='number-sum']").innerHTML =
    "Number-sum: 0";
  document.querySelector("li[data-testid='word-length-average']").innerHTML =
    "Word-length-average: 0";
});
// document.querySelector('form').reset();

//escuchador cuando llenan el textarea
texto.addEventListener("input", function () {
  const wordCount = analyzer.getWordCount(texto.value);
  const wc = document.querySelector("li[data-testid='word-count']");
  wc.textContent = "Word-count: " + wordCount;

  const characterCount = analyzer.getCharacterCount(texto.value);
  const cc = document.querySelector("li[data-testid='character-count']");
  cc.textContent = "Character-count: " + characterCount;

  const charNoSpaces = analyzer.getCharacterCountExcludingSpaces(texto.value);
  const cNe = document.querySelector(
    "li[data-testid='character-no-spaces-count']"
  );
  cNe.textContent = "Character-no-spaces-count: " + charNoSpaces;

  const numberCount = analyzer.getNumberCount(texto.value);
  const nc = document.querySelector("li[data-testid='number-count']");
  nc.textContent = "Number-count: " + numberCount;

  const numberSum = analyzer.getNumberSum(texto.value);
  const ns = document.querySelector("li[data-testid='number-sum']");
  ns.textContent = "Number-sum: " + numberSum;

  const wordLength = analyzer.getAverageWordLength(texto.value);
  const wl = document.querySelector("li[data-testid='word-length-average']");
  wl.textContent = "Word-length-average: " + wordLength;
});

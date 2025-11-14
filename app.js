console.log("hui");
inputNumb = document.getElementById("numb");
submitButton = document.getElementById("submit");

function GenerateRandomNumb(max, min) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

submitButton.addEventListener("click", function () {
  let nValue = parseInt(inputNumb.value);
  console.log(nValue);
  function NumbGuesser() {
    const rand = GenerateRandomNumb(100, 1);
    if (nValue == rand) {
        
      console.log("good");
    } else if (nValue < rand) {
      console.log("bellow");
    } else {
      console.log("above");
    }
  }
  NumbGuesser();
});

console.log(GenerateRandomNumb(100, 1));

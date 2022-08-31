const inputs = document.querySelector(".inputs"),
  resetBtn = document.querySelector(".reset-btn"),
  hint = document.querySelector(".hint span");
function randomWord() {
  //getting random object from wordList
  let ranObj = wordList[Math.floor(Math.random() * wordList.length)];
  let word = ranObj.word; //getting word from random object
  console.log(word);
  hint.innerText = ranObj.hint;
  let html = "";
  for (let i = 0; i < word.length; i++) {
    html += `<input type="text" disabled>`;
  }
  inputs.innerHTML = html;
}
randomWord();

resetBtn.addEventListener("click", randomWord);

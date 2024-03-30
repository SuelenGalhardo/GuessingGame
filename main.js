//variaveis
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");
const randomNumber = Math.round(Math.random() * 10);
let xAttempts = 1;

//eventos
btnTry.addEventListener("click", handleTryClick);
btnReset.addEventListener("click", handleResetClick);

document.addEventListener('keydown', function(e) {
  if(e.key == 'Enter' && screen1.classList.contains('hide')) {
      handleResetClick()
  }
})

//funcao callback (chama ela de volta)

function handleTryClick(event) {
  event.preventDefault(); //nao faca o padrao
  const inputNumber = document.querySelector("#inputNumber");

  if (Number(inputNumber.value) == randomNumber) {
 toggleScreem() 
 
    screen2.querySelector("h2").innerText = `acertou em ${xAttempts} tentativas`;
  }
  inputNumber.value = ''
  xAttempts++
}

function handleResetClick () {
  toggleScreem()
  xAttempts = 1
  randomNumber = Math.round(Math.random() * 10) //reseta o handomNumber também
}

function toggleScreem () {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}

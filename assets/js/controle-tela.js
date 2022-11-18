document.querySelector(".tela-inicial").style.display = "block"
document.querySelector(".tela-game").style.display = "none"
document.querySelector(".tela-adiciona-nova-palavra").style.display = "none"

function jogar(){
  document.querySelector(".tela-inicial").style.display = "none"
  document.querySelector(".tela-game").style.display = "block"
  document.querySelector(".tela-adiciona-nova-palavra").style.display = "none"
}

function adicionarPalavra(){
  document.querySelector(".tela-inicial").style.display = "none"
  document.querySelector(".tela-game").style.display = "none"
  document.querySelector(".tela-adiciona-nova-palavra").style.display = "block"
}

function desistir(){
  document.location.reload(true);
}

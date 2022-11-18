//Seletores
let palavras = ["ALURA", "ORACLE", "FORCA", "HTML", "JAVASCRIPT", "LOGICA"];
let tabuleiro = document.getElementById("forca").getContext('2d');
let palavraSecreta = "";
let palavraDigitada = [];
let letras = [];
let erros = 8;
function salvarPalavraComecar(){
  let novaPalavra = document.querySelector('.entrada-nova-palavra').value.toUpperCase();
  palavras.push(novaPalavra);
  document.querySelector(".tela-game").style.display = "block"
  document.querySelector(".tela-adiciona-nova-palavra").style.display = "none"
  
  novoJogo()
}
iniciarJogo()
function iniciarJogo(){
  escolherPalavraSecreta();
  desenharCanvas()
  desenharCanvas();
  desenharLinhas();
    document.onkeydown = (e) => {
      let letra = e.key.toUpperCase();
  
      if(verificarLetra(letra) && palavraSecreta.includes(letra)){
        for(let i = 0; i < palavraSecreta.length; i++){
          if(palavraSecreta[i] === letra && erros!==0){
            escreverLetraCorreta(i);
            adicionarLetraCorreta(i);
          }
        }
      }
      else{
        if(!verificarGanhador() && erros!==0){
          adicionarLetraIncorreta();
          desenharFoca(erros);
          escreverLetraIncorreta(letra, erros);
        }      
      }
      if(verificarGanhador()){
        escreverVoceGanhou();
      }
      else if(erros==0){
        escreverVocePerdeu();
      }
    }
}
function novoJogo(){
  palavraSecreta = "";
  palavraDigitada = [];
  letras = [];
  erros = 8;

  iniciarJogo();
}
function escolherPalavraSecreta(){
  let palavra = palavras[Math.floor(Math.random() * palavras.length)];
  palavraSecreta = palavra;
}
function adicionarLetraIncorreta(){
  erros-=1;
}
function verificarLetra(key){
  let estado = false;
  if(key >= 65 && letras.indexOf(key) || key <= 90 && letras.indexOf(key)){
    letras.push(key);
    return estado;
  }else{
    estado = true;
    letras.push(key);
    return estado;
  }
}
function verificarGanhador(){
  if(palavraSecreta === palavraDigitada.join('')){
      return true;
    }else{
      return false;
    }
}
function adicionarLetraCorreta(index){
  palavraDigitada[index] = palavraSecreta[index];
}



//Parte do desenho do Canvas 
//Desenhar tabuleiro
function desenharCanvas(){
  tabuleiro.lineWidth = 8;
  tabuleiro.lineCap = "round";
  tabuleiro.lineJoin = "round";
  tabuleiro.fillStyle = "#cbf4fc"; 
  tabuleiro.strokeStyle = "#0A3871";

  //manipulação
  tabuleiro.fillRect(0,0,1200,600);
  tabuleiro.beginPath();
  tabuleiro.moveTo(700,300);
  tabuleiro.lineTo(450,300);
  tabuleiro.stroke();
  tabuleiro.closePath();
}
//desenharLinhas
function desenharLinhas(){
  tabuleiro.lineWidth = 6;
  tabuleiro.lineCap = "round";
  tabuleiro.lineJoin = "round";
  tabuleiro.fillStyle = "#cbf4fc"; 
  tabuleiro.strokeStyle = "#0A3871";

  let largura = 600/palavraSecreta.length;
  for(let i = 0; i < palavraSecreta.length; i++){
    tabuleiro.moveTo(300+(largura*i), 440);
    tabuleiro.lineTo(350+(largura*i), 440);
  }

  tabuleiro.stroke();
  tabuleiro.closePath();
}
function escreverLetraCorreta(index){
  tabuleiro.font = "bold 52px Inter";
  tabuleiro.lineCap = "round";
  tabuleiro.fillStyle = "#0A3871";
  tabuleiro.lineWidth = 6;
  let largura = 600/palavraSecreta.length;
  tabuleiro.fillText(palavraSecreta[index],305 + (largura*index),430);
}
function escreverLetraIncorreta(letra, erros){
  tabuleiro.font = "bold 40px Inter";
  tabuleiro.lineCap = "round";
  tabuleiro.fillStyle = "#0A3871";
  tabuleiro.lineWidth = 6;
  tabuleiro.fillText(letra, 320 + (40* (10-erros)), 520, 40)
}
function escreverVocePerdeu(){
  tabuleiro.font = "bold 40px Inter";
  tabuleiro.lineCap = "round";
  tabuleiro.fillStyle = "red";
  tabuleiro.lineWidth = 6;
  tabuleiro.fillText("Você perdeu!", 900, 100)
}
function escreverVoceGanhou(){
  tabuleiro.font = "bold 40px Inter";
  tabuleiro.lineCap = "round";
  tabuleiro.fillStyle = "green";
  tabuleiro.lineWidth = 6;
  tabuleiro.fillText("Parabéns", 900, 100)
  tabuleiro.fillText("você ganhou!", 900, 150)
}
function desenharFoca(erros){
  tabuleiro.lineWidth = 8;
  tabuleiro.lineCap = "round";
  tabuleiro.lineJoin = "round";
  tabuleiro.fillStyle = "#cbf4fc"; 
  tabuleiro.strokeStyle = "#0A3871";
  
  //desenha a haste da foca vertical
  if(erros===7){
    tabuleiro.moveTo(520,300);
    tabuleiro.lineTo(520,10);
  }
  //desenha a haste da foca horizontal
  else if(erros===6){
    tabuleiro.moveTo(520,10);
    tabuleiro.lineTo(700,10);
    tabuleiro.moveTo(700,10);
    tabuleiro.lineTo(700,50);
  }
  //desenha a cabeça
  else if(erros===5){
    tabuleiro.beginPath();
    tabuleiro.arc(700, 80, 30, 0, 2*Math.PI);
  }
  //desenha corpo
  else if(erros===4){
    tabuleiro.moveTo(700,110);
    tabuleiro.lineTo(700,220);
  }
  //desenha braço esquerdo
  else if(erros===3){
    tabuleiro.moveTo(700,130);
    tabuleiro.lineTo(660,180);
  }
  //desenha braço direito
  else if(erros===2){
    tabuleiro.moveTo(700,130);
    tabuleiro.lineTo(740,180);
  }
  ////desenha perna esquerda
  else if(erros===1){
    tabuleiro.moveTo(700,220);
    tabuleiro.lineTo(650,270);
  }
  ////desenha perna direito
  else if(erros===0){
    tabuleiro.moveTo(700,220);
    tabuleiro.lineTo(750,270);
  }

  tabuleiro.stroke();
  tabuleiro.closePath();
}
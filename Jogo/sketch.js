function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(fps);
  jogo = new Jogo();
  telaInicial = new TelaInicial();
  jogo.setup();
  cenas = {
    jogo,
    telaInicial,
  }
  botaoGerenciador = new BotaoGerenciador('Start', width/2, height/2);
}

function draw() {
  cenas[cenaAtual].draw();
}

function keyPressed(){
  jogo.keyPressed(key);
}
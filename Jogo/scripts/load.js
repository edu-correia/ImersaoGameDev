function preload(){
  imagemCenario = loadImage('imagens/cenario/floresta.png');
  imagemVida = loadImage('imagens/assets/coracao.png');
  imagemFim = loadImage('imagens/assets/game-over.png');
  imagemTelaInicial = loadImage('imagens/cenario/telaInicial.png');
  imagemPersonagem = loadImage('imagens/personagem/correndo.png');
  imagemInimigo = loadImage('imagens/inimigos/gotinha.png');
  imagemInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png');
  fonteTelaInicial = loadFont('imagens/assets/fonteTelaInicial.otf')
  imagemInimigoGrande = loadImage('imagens/inimigos/troll.png');
  somDoJogo = loadSound('sons/trilha_jogo.mp3');
  somDoPulo = loadSound('sons/somPulo.mp3');
  fita = loadJSON('fita/fita.json');
}
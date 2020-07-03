class Jogo{
  constructor(){
    this.indice = 0;
    this.mapa = fita.mapa;
  }
  
  setup(){
    cenario = new Cenario(imagemCenario, 5);
    pontuacao = new Pontuacao();
    vida = new Vida(fita.configuracoes.vidaMaxima,fita.configuracoes.vidaInicial);
    personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0,       30, 110, 135, 220, 270);
    const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width -       52, 30, 52, 52, 104, 104, 15);
    const inimigoVoador = new Inimigo(matrizInimigoVoador,                   imagemInimigoVoador, width - 52, 180, 100, 75, 200, 150, 15);
    const inimigoGrande = new Inimigo(matrizInimigoGrande,                   imagemInimigoGrande, width, 0, 200, 200, 400, 400, 15);
  
    inimigos.push(inimigo);
    inimigos.push(inimigoGrande);
    inimigos.push(inimigoVoador);

    somDoJogo.loop();
  }
  
  keyPressed(){
    if(key == 'ArrowUp'){
      personagem.pula();
      somDoPulo.play();
    }
  }
  
  draw(){
    cenario.exibe();
    cenario.move();
    personagem.exibe();
    personagem.aplicaGravidade();
    pontuacao.exibe();
    pontuacao.adicionaPontos();
    vida.draw();

    const linhaAtual = this.mapa[this.indice];
    const inimigo = inimigos[linhaAtual.inimigo];
    const inimigoVisivel = inimigo.x < - inimigo.largura ? true : false; 
    
    inimigo.velocidade = linhaAtual.velocidade;

    inimigo.exibe();
    inimigo.move();

    if(inimigoVisivel){
      this.indice++;
      inimigo.aparece();
      if(this.indice > this.mapa.length - 1){
        this.indice = 0;
      }
    }

    if(personagem.estaColidindo(inimigo)){
      console.log("Colidiu!");
      vida.perdeVida();
      personagem.ficaInvencivel();
      if(vida.vidas === -1){
         image(imagemFim, width/2 - largGameOver/2, height/2 -              altGameOver/2);
        vida.perdeVida();
        noLoop();
      }
    }
  }
}
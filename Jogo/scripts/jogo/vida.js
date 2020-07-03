class Vida{
  constructor(total, inicial){
    this.total = total;
    this.inicial = inicial;
    this.vidas = this.inicial;
    this.largura = 40;
    this.altura = 40;
  }
  
  draw(){
    for(let i = 0; i < this.vidas; i++){
      image(imagemVida, (i*50) + 25, 25, this.largura,                     this.altura);  
    }
  }
  
  ganhaVida(){
    if(this.vidas <= this.total){
      this.vidas++;
    }
  }
  
  perdeVida(){
    this.vidas--;
  }
}
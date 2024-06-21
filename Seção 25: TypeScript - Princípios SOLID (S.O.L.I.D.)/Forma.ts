
// 2- Aplique o princípio da substituição de Liskov implementando uma classe base Forma e classes derivadas Quadrado e Retangulo que mantenham a consistência do comportamento.

export abstract class Forma {
  abstract calcularArea(): number
}

class Retangulo  extends Forma {
  private comprimento: number;
  private largura: number

  constructor (
  comprimento: number,
  largura: number
  ) {
    super()
    this.comprimento = comprimento
    this.largura = largura
  }
   calcularArea(): number  {
    return this.comprimento * this.largura
  }
}
const retangulo1 = new Retangulo(3, 5)
console.log(retangulo1.calcularArea());

class Quadrado extends Forma {
  lado: number
  
  constructor (
    lado: number
  ) {
    super() 
    this.lado = lado
  }

  calcularArea(): number {
      return this.lado * 2
  }
}

const quadrado1 = new Quadrado(5)
console.log(quadrado1.calcularArea());


// 1- Crie um namespace Util que contenha uma função para calcular a área de um círculo.

namespace Util {
  export function calculateCircleArea(radius: number): number {
    return Math.PI * Math.pow(radius, 2)
  }
}
console.log(Util.calculateCircleArea(5));

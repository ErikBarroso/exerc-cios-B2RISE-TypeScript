// 2- Separe um projeto em múltiplos módulos, onde cada módulo exporta uma função ou classe diferente. Utilize import e export para conectar os módulos.
import SquareEntity from "./entites/SquareEntity";
import calculateSquareArea from "./utils/calculate-square-area";

const square1: SquareEntity = {
length: 10,
width: 10
}

console.log(calculateSquareArea(square1));
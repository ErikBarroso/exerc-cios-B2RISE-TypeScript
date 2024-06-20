import SquareEntity from "../entites/SquareEntity";

export default function calculateSquareArea(square: SquareEntity): number {
  return square.length * square.width
}
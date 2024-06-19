// 1- Utilize o tipo union para criar uma variável que pode ser uma string ou um número.
let idade: number | string

// 2 - Defina um tipo alias para um objeto que represente um ponto no espaço 2D, com propriedades x e y. Escreva uma função que calcule a distância entre dois pontos.

type Dimensions = {
  x: number,
  y: number
}

function calculateDistance({ x , y }: Dimensions): number {
  return Math.hypot(x - y)
}
// console.log(calculateDistance({x: 200, y:100}));
 
// 3 - Crie um tipo mapped que transforme todas as propriedades de um objeto em opcionais. 
//Utilize esse tipo para definir uma função que atualize parcialmente um objeto, aplicando somente as mudanças fornecidas.

//Não sabia, mas o tipo Partial já faz isso.
type MappedChangePropertiesInOptional<T> = {
  [Property in keyof T]?: T[Property];
};
 
type User = {
  id: string;
  name: string;
  age?: number;
};
// type UserPropertiesAllOptional = MappedChangePropertiesInOptional<User>;

function updateObject(user: User, updateUser: MappedChangePropertiesInOptional<User>) { 
return {...user, ...updateUser }
}

const user1: User = {
  id: '10',
  name:'erik',
  age: 30,
}

const updateUser1: User = {
  id: '10',
  name:'erik_barroso',
  age: 31,
}
// console.log(updateObject(user1, updateUser1));
// isso aqui seria redundante, quando declaramos um valor na variável ele o TS já infere o tipo.

const nameUser: string = 'Erik'
const age: number = 27
const isAuthorized: boolean = true

//2 - função que receba dois números e retorne a soma deles.
function sum(x: number, y: number): number {
    return x+y;
}
console.log(sum(3,3));



//3
// Crie uma interface que descreva um objeto com propriedades de diferentes tipos básicos (string, number, boolean). 
// Em seguida, escreva uma função que receba esse objeto e imprima suas propriedades no console
interface Person {
    name: string,
    age: number,
    isAuthorized: boolean
}

const client: Person = {
    name: 'Erik',
    age: 27,
    isAuthorized: true
}


function printPerson(person: Person): void {
 console.log(person);
}

printPerson(client)
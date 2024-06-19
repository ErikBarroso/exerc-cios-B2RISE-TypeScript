// Crie uma classe Pessoa com propriedades nome e idade, 
// e um método que retorne uma saudação incluindo essas informações.

export class Person {
    constructor(
        readonly name: string,
        readonly age: number
    ) {}

    salution(): string{
        return (`Olá, meu nome é ${this.name} e eu tenho ${this.age} anos`);
    }
}

const user1 = new Person('Erik', 27)
// console.log( user1.salution());

//2- Implemente uma interface Animal com métodos emitirSom e mover.
//Crie uma classe Cachorro que implemente essa interface

interface Animal {
    emitirSom(): string
    mover(): string
}

export class Cachorro implements Animal {
    constructor (
        readonly name: string
    ) {}

    emitirSom(): string {
        return `${this.name} está latindo`
    }

     mover(): string {
        return `${this.name} está Correndo`
    }
}

// const dog1 = new Cachorro('Rex')
// console.log(dog1.emitirSom(), '|', dog1.mover());

//3 - Crie uma hierarquia de classes para representar diferentes tipos de veículos. 
//A classe base Veiculo deve ter propriedades e métodos comuns,
//enquanto as classes derivadas Carro e Moto devem estender Veiculo e adicionar funcionalidades específicas.

/* export abstract class Vehicles {
    constructor(
        readonly type: string,
        readonly brand: string,
    ){}
        speedUp(): string {
            return `${this.type} acelerando!`
        }
}

export class Car extends Vehicles {
    constructor(
        type: string,
        brand: string,
       public numberDoors: number
    ) { super(
        type, 
        brand
    )}
     openDoors(): string {
        return `Abrir as ${this.numberDoors} portas do ${this.type}`
    }
}

export class Motorcycle extends Vehicles {
     handlebar(): string {
        return `Girando guidão da ${this.type}`
    }
}

const car1 = new Car('Carro', 'Ford', 4)
const motorcycle1 = new Motorcycle('Moto', 'Honda')

console.log(car1.openDoors(), 'e' ,car1.speedUp());
console.log(motorcycle1.handlebar(), 'e' ,motorcycle1.speedUp());
*/

export abstract class Vehicles {
    constructor(
        private _type: string,
        private _brand: string,
    ){}
        abstract speedUp() : string

        get type(): string {
            return this._type
        }

        get brand(): string {
            return this._brand
        }
}

export class Car extends Vehicles {
    constructor(
        type: string,
        brand: string,
       public numberDoors: number
    ) { super(
        type, 
        brand
    )}
    speedUp(): string {
        return `Acelerando ${this.type} da marca ${this.brand}`
    }
     openDoors(): string {
        return `Abrir as ${this.numberDoors} portas do ${this.type}`
    }
}

export class Motorcycle extends Vehicles {
    speedUp(): string {
        return `Acelerando ${this.type} da marca ${this.brand}`
    }
    
     handlebar(): string {
        return `Girando guidão da ${this.type}`
    }
}

const car1 = new Car('Carro', 'Ford', 4)
const motorcycle1 = new Motorcycle('Moto', 'Honda')

// console.log(car1.type);
// console.log(motorcycle1);
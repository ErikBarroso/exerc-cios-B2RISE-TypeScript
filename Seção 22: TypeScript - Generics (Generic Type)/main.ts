// 1- Crie uma função genérica que receba um array de elementos e retorne o primeiro elemento.
function returnFirstElement<T>(elements: T[]) {
return elements[0]
}

const arrayElementsNumbers = [10,20, 30]
// console.log(returnFirstElement(arrayElementsNumbers));

const arrayElementsStrings = ['Erik', "Alan", "Luiz"]
// console.log(returnFirstElement(arrayElementsStrings));

// 2- Implemente uma classe genérica Stack com métodos para 
//adicionar um elemento ao topo, 
//remover o elemento do topo e
//verificar se a pilha está vazia.

export default class Stack<T> {
  private storage: T[] = [];

  addElementTop(item:  T): void {
    this.storage.push(item)
  }

  removeElementTop(): T | string | undefined {
    if (this. storage.length === 0){
      return 'A pilha já está vazia.'
    };
    return this.storage.pop()
  }

  isEmpty(): boolean {
    return this.storage.length === 0;
  }

  peek(): T | undefined  | number {
    return this.storage[this.storage.length-1];
  }

  viewStack(): void  {
    for ( const key in this.storage ) {
      console.log(this.storage[key]);
    }
  }
}

const stack = new Stack()

// console.log(stack.removeElementTop());
// stack.addElementTop('Moto')
// stack.addElementTop('Carro')
// stack.addElementTop(100)
// stack.viewStack()
// console.log(stack.isEmpty());
// console.log(stack.peek());

// 3- Crie uma função genérica que receba um objeto e um array de chaves. 
//A função deve retornar um novo objeto 
//contendo apenas as propriedades especificadas pelas chaves.

function getKey<T, K extends keyof T>(object: T, keys: K[]): Partial<T> {
  const newObject: Partial<T> = {}
  for (let key of keys ) {
      newObject[key] = object[key];
  }
  return newObject
}

const car = {
  color: "Red",
  year: 2010,
  doors: 4
}

const keys: Array<keyof typeof car> = ['color', 'doors']
console.log(getKey(car, keys));
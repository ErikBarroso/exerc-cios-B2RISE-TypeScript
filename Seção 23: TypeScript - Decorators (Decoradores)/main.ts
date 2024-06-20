// 1- Crie um decorator de método que registre o tempo de execução de uma função.
function decoratorFunctionExecutionTime(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value

  descriptor.value = function() {
    let start = performance.now();
    const result = originalMethod.apply(this)
    let timeLoopMetod = performance.now() - start;
    console.log("Total time loopMetod : " + timeLoopMetod + " milliseconds");
    return result
  }
  return descriptor
}

// 2- Implemente um decorator de propriedade que valide se um valor atribuído a uma propriedade string não é vazio.
function decoratorStringNotEmpty(target: any, key: string ): any {
  let value: string
  return {
    get: () => value,
    set: (newValue: string) => {
        if(!newValue || newValue.trim().length === 0) {
           return console.log((`Valor de ${key} não pode ser vazio`))
        }
        value = newValue
      }
    }
}

// 3 -Crie um decorator de classe que adicione um método estático à classe para criar instâncias usando um objeto de configuração

function decoratorInstanceClassConfig<T extends new (...args : any[]) => any>(constructor: T) {
  console.log('constructor:::' , constructor);
  return class extends constructor {
    static instanceConfig(config: any) {
      return new constructor(config)
    }
  }
}

@decoratorInstanceClassConfig
export class Pessoa {
    @decoratorStringNotEmpty
    nome: string
    idade: number

   constructor(
    nome: string,
    idade: number
    ) { 
    this.nome = nome
    this.idade = idade
  }

  @decoratorFunctionExecutionTime
    loopMetod() {
    let sum = 0;
    for (let i = 0; i < 1000; i++) {
      sum += i;
    }
    return sum;
  }
}

const person1 = new Pessoa('Erik', 27)
// console.log(person1.nome);
// person1.loopMetod()


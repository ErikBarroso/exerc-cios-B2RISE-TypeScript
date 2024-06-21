// 1- Implemente o princípio de responsabilidade única criando uma classe Usuario que seja responsável apenas pela manipulação de dados de usuário.

export class User {
    private name: string;
    private email: string;
    private age: number;
  constructor(
    name: string,
    email: string,
    age: number,
  ){
     this.name = name;
      this.email = email;
      this.age = age;
  }

  getName(): string {
    return this.name
  }

  setName(newName: string): void {
    this.name = newName
  }

  viewInformations(): void {
    console.log(`Nome : ${this.name}, Email:${this.email}, Idade: ${this.age}`);
  }
}

const user1 = new User("erik", 'teste@gmail.com', 20)
user1.viewInformations()


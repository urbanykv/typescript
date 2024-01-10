interface pessoaType {
  nome: string,
  idade: number,
  profissao?: string
};

const pessoa : pessoaType = {
  nome: "Matheus",
  idade: 21
};

const outraPessoa : pessoaType = {
  nome:"Leandro",
  idade: 50,
  profissao: "Desenvolvedor"
};

const arrayPessoa : Array<pessoaType> = [ pessoa, outraPessoa ];

const arrayString : string[] = [ 'Matheus', 'Leandro' ];


const typeUser = {
  admin: 'Seja bem vindo admin',
  student: 'Você é um estudante',
  viewer: 'Você pode visualizar'
}

function validateUser(user: string){
  console.log(typeUser[user as keyof typeof typeUser]);
}

const Matheus = {
  name: 'Matheus',
  age: 25,
  shownApresentation(){console.log(`Oi, meu nome é ${this.name}`)}
}


class Pessoa{
  private name;
  private age;

  constructor(name: string, age: number){
    this.name = name;
    this.age = age;
  }

  showApresentation(){
    console.log(`Oi, meu nome é ${this.name} e eu tenho ${this.age} anos!`);
    
  }
}

const p1 = new Pessoa("Matheus", 32);

p1.showApresentation();

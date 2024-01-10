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
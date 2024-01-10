abstract class Account{
  private name: string | undefined;
  private accountNumber: number | undefined;
  private balance: number = 0;

  constructor(name: string, accountNumber: number, balance: number){
    this.name = name;
    this.accountNumber = accountNumber;
    this.balance = balance;
  }

  deposit = () => {vvvvvvvv
    console.log("Você depositou.");
  }

  withdraw = () => {
    console.log("Você sacou.");
  }

  getValue = () => {
    console.log(this.balance);
  }
}

class UserAccount extends Account{
  private doc_id: number | undefined;

  constructor(name: string, accountNumber: number, balance: number, doc_id: number){
    super(name, accountNumber, balance)
    this.doc_id = doc_id;
  }
}

class CompanyAccount extends Account{
  constructor(name: string, accountNumber: number, balance: number){
    super(name, accountNumber, balance)
  }

  getLoan = () => {
    console.log("Você pegou um empréstimo");
  }
}

const userAccount = new UserAccount('Matheus', 150051, 151000 , 25);


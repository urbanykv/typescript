import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount{
  constructor(name: string, accountNumber: number, balance: number){
    super(name, accountNumber, balance)
  }

  getLoan = (loan: number): void => {
    if(this.validadeStatus()){
      this.balance = this.balance + loan;
      console.log(`O valor de empréstimo requerido foi de ${loan}\nO seu saldo com o empréstimo é de: ${this.balance}`);
    }
  }
}
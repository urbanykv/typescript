import { DioAccount } from "./DioAccount";

export class OtherAccount extends DioAccount{
  constructor(name: string, accountNumber: number, balance: number){
    super(name, accountNumber, balance)
  }
  
  deposit = (deposit: number): void => {
    this.balance = this.balance + deposit + (0.1 * this.balance);
    console.log(`A operação ocorreu com sucesso.\nSeu novo saldo é: ${this.balance}\n`);
  }
}
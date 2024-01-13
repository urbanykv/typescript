export abstract class DioAccount{
  private name: string;
  private readonly accountNumber: number;
  protected balance: number = 0;
  private status: boolean = true;
  static balance: number;

  constructor(name: string, accountNumber: number, balance: number){
    this.name = name;
    this.accountNumber = accountNumber;
    this.balance = balance;
  }

  setName = (name: string): string => {
    this.name = name;

    return "Novo nome salvo."
  }

  getName = (): string => {
    return this.name
  }

  deposit = (deposit: number): void => {
    if(this.validadeStatus()){
      this.balance = this.balance + deposit;
      console.log(`A operação ocorreu com sucesso.\nSeu novo saldo é: ${this.balance}\n`);
    }
  }

  withdraw = (withdraw: number): void => {
    if(this.validadeStatus()){
      this.balance = this.balance - withdraw;
      console.log(`A operação ocorreu com sucesso.\nSeu novo saldo é: ${this.balance}\n`);
    }
  }

  getValue = (): void => {
    console.log(`O seu saldo é: ${this.balance}`);
  }

  validadeStatus = (): boolean => {
    if(this.status){
      return this.status
    }
    throw new Error('Conta inválida.');
  }
}
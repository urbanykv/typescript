export abstract class DioAccount{
  private name: string;
  private readonly accountNumber: number;
  private balance: number = 0;
  private status: boolean = true;

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

  deposit = (): void => {
    if(this.validadeStatus()){
      console.log('Você depositou.');
    }
  }

  withdraw = (): void => {
    console.log("Você sacou.");
  }

  getValue = (): void => {
    console.log(this.balance);
  }

  validadeStatus = (): boolean => {
    if(this.status){
      return this.status
    }
    throw new Error('Conta inválida.');
  }
}
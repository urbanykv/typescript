import { DioAccount } from "./DioAccount";

export class UserAccount extends DioAccount{
  private doc_id: number | undefined;

  constructor(name: string, accountNumber: number, balance: number, doc_id: number){
    super(name, accountNumber, balance)
    this.doc_id = doc_id;
  }
}
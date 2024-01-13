import { CompanyAccount } from "./class/CompanyAccount";
import { OtherAccount } from "./class/OtherAccount";
import { UserAccount } from "./class/UserAccount";

const userAccount: UserAccount = new UserAccount('Matheus', 1515, 2500, 100);

const companyAccount: CompanyAccount = new CompanyAccount('Loja Tudo10', 1516, 25000);

const otherAccount: OtherAccount = new OtherAccount('Outra Conta', 1517, 100);

// Testes da class UserAccount
console.log(userAccount);
userAccount.deposit(52);
userAccount.withdraw(15);
userAccount.getName();
userAccount.getValue();
userAccount.validadeStatus();

// Testes da class CompanyAccount
console.log(companyAccount);
companyAccount.deposit(52);
companyAccount.withdraw(15);
companyAccount.getName();
companyAccount.getValue();
companyAccount.validadeStatus();
companyAccount.getLoan(1500);

// Testes da class OtherAccount

console.log(otherAccount);
otherAccount.deposit(52);
otherAccount.withdraw(15);
otherAccount.getName();
otherAccount.getValue();
otherAccount.validadeStatus();
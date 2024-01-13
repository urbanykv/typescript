import { CompanyAccount } from "./class/CompanyAccount";
import { OtherAccount } from "./class/OtherAccount";
import { UserAccount } from "./class/UserAccount";

const userAccount: UserAccount = new UserAccount('Matheus', 1515, 2500, 100);

const companyAccount: CompanyAccount = new CompanyAccount('Loja Tudo10', 1516, 25000);

const otherAccount: OtherAccount = new OtherAccount('Outra Conta', 1517, 100);

// Testes da class UserAccount
userAccount.deposit(52);
userAccount.getName();
userAccount.
userAccount.getValue();

// Testes da class CompanyAccount

// Testes da class OtherAccount
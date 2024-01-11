import { UserAccount } from "./class/UserAccount";
import { CompanyAccount } from "./class/CompanyAccount";

const userAccount = new UserAccount('Matheus', 150051, 151000 , 25);

const itau: CompanyAccount = new CompanyAccount('Itaú', 1500, 200);

userAccount.setName('Leandro');

console.log(userAccount);

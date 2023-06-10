import {
  CustomerOrder,
  IndividualCustomerProtocol,
} from './interfaces/customer-protocol';

export class IndividualCustomer
  implements IndividualCustomerProtocol, CustomerOrder {
  firstname: string;
  lastName: string;
  cpf: string;

  constructor(firstName: string, LastName: string, cpf: string, cnpj: string) {
    this.firstname = firstName;
    this.lastName = LastName;
    this.cpf = cpf;
  }

  getIDN(): string {
    throw new Error('Method not implemented.');
  }

  getName(): string {
    throw new Error('Method not implemented.');
  }
}

export class EnterpriseCustomer implements EnterpriseCustomer, CustomerOrder {
  name: string;
  cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }

  getName(): string {
    throw new Error('Method not implemented.');
  }
  getIDN(): string {
    throw new Error('Method not implemented.');
  }
}

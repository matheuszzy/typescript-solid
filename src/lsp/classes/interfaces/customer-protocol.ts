export interface CustomerOrder {
  getName(): string;
  getIDN(): string;
}

export interface IndividualCustomerProtocol {
  firstname: string;
  lastName: string;
  cpf: string;
}

export interface EnterpriseCustomerCustomerProtocol {
  name: string;
  cpf: string;
}

export interface ICompany {
  id: number;
  name: string;
  vatin: string;
}

export interface IPhoneNumber {
  id: string;
  type: string;
  number: string;
  company_id: number;
}

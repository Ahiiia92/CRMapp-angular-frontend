export class Contact {
  id: string;
  streetname: string;
  zipCode: string;
  city: string;
  email: string;

  constructor(public firstname: string,
              public lastname: string,
              public address: string,
              public job:string) {
  }
}

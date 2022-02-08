import { UUID } from 'angular2-uuid';

export class Customer {
  id: string;
  public firstName: string;
  lastName: string;
  age: number;
  email: string;

  constructor(
    firstName: string = '',
    lastName: string = '',
    age: number = 0,
    email: string = ''
  ) {
    this.id = '';
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
  }
}

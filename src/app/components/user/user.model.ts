export class User {

  public id: number;
  public firstName: string;
  public lastName: string;
  public email: string;
  public country: string;
  public dateOfBirth: Date

  constructor(user: User) {
    this.id = user.id;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.email = user.email;
    this.country = user.country;
    this.dateOfBirth = user.dateOfBirth;
  }

  age(): number {
    return 18;
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

}

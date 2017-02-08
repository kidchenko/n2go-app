export interface IUser {

  id: number;
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  dateOfBirth: Date;

}


export class User implements IUser {

  public id: number;
  public firstName: string;
  public lastName: string;
  public email: string;
  public country: string;
  public dateOfBirth: Date;

  constructor(user: IUser) {
    this.id = user.id;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.email = user.email;
    this.country = user.country;
    this.dateOfBirth = new Date(user.dateOfBirth);
  }

  getAge(): number {
    var ageDif = this.ageDifFromBirth();
    return this.calcuteDif(ageDif);
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  private ageDifFromBirth() {
    let now = Date.now();
    let myBirthday = this.dateOfBirth.getTime();
    return now - myBirthday;
  }

  private calcuteDif(ageDif: number) {
    var ageDate = new Date(ageDif);  // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

}

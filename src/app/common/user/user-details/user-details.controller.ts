import * as angular from 'angular';

import { IUser } from '../user.model';
import { UserService } from './../user.service';

export class UserDetailsController {

  static $inject: string[] = ['UserService'];

  public editMode: boolean = false;
  public age: number;
  public fullName: string;
  private cache: IUser;
  private user: IUser;

  constructor(private userService: UserService) { }

   $onInit() {
     this.age = this.userService.getAge(this.user);
     this.fullName = this.userService.getFullName(this.user);
   }

  edit() {
    this.cache = angular.copy(this.user);
    this.editMode = true;
  }

  save(user: IUser) {
    this.userService.save(user);
    this.fullName = this.userService.getFullName(user);
    this.editMode = false;
  }

  cancel(form: angular.IFormController) {
    if (!form.$dirty) {
      this.editMode = false;
      return;
    }

    let instance = this.userService.confirm();

    return instance.result
      .then(() => {
        this.user = this.cache;
        this.editMode = false;
      })
      .catch(() => this.editMode = true);
  }

 }

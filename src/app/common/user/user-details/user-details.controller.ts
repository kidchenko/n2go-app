import * as angular from 'angular';

import { User } from '../user.model';
import { UserService } from './../user.service';

export class UserDetailsController {

  static $inject: string[] = ['UserService'];

  public editMode: boolean = false;
  private cache: User;
  private user: User;

  constructor(private userService: UserService) { }

  edit() {
    this.cache = angular.copy(this.user);
    this.editMode = true;
  }

  save(user: User) {
    this.userService.save(user);
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

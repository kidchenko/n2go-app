import * as angular from 'angular';

import { User } from '../user.model';
import { UserService } from './../user.service';
import { UserConfirmService } from './../user-confirm/user-confirm.service';


export class UserDetailsController {

  static $inject: string[] = ['UserService', 'userConfirmService'];

  private cache: User;
  private user: User;
  public editMode: boolean = false;

  constructor(private userService: UserService,
              private userConfirmService: UserConfirmService) { }

  edit() {
    this.cache = angular.copy(this.user);
    this.editMode = true;
  }

  save(user: User) {
    this.userService.save(user);
    this.editMode = false;
  }

  cancel(form) {
    if (form.$dirty) {
      let instance = this.userConfirmService.confirm();

      instance.result
        .then(() => {
          this.user = this.cache;
          this.editMode = false
        })
        .catch(() => this.editMode = true);

      } else {
        this.editMode = false;
      }
  }

 }

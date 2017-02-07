import * as angular from 'angular';

import { UserService } from './../user.service';
import { UserConfirmController } from './user-confirm.controller';
import { User } from '../user.model';

export class UserDetailsController {

  static $inject: string[] = ['UserService', '$uibModal'];

  private cache: User;
  private user: User;

  constructor(private userService: UserService,
              private $modal: angular.ui.bootstrap.IModalService) {

               }

  editMode = false;

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
      let instance = this.$modal.open({
        template: require('./user-confirm.html'),
        bindToController: true,
        controllerAs: '$ctrl',
        controller: UserConfirmController,
      });

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

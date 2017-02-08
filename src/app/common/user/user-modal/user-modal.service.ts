import { User } from './../user.model';

import { UserModalController } from './user-modal.controller';

export class UserModalService {

  static $inject: string[] = ['$uibModal'];

  constructor(private $modal: angular.ui.bootstrap.IModalService) { }

   show(user: User) {
    return this.$modal.open({
      template: require('./user-modal.html'),
      bindToController: true,
      controllerAs: '$ctrl',
      controller: UserModalController,
      resolve: {
        user: () => {
          return user;
        }
      }
    });
  }
}

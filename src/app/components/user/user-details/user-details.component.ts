import { UserDetailsController } from './user-details.controller';

export const UserDetailsComponent: angular.IComponentOptions = {
  template: require('./user-details.html'),
  controller: UserDetailsController,
  bindings: {
    user: '<'
  }
};

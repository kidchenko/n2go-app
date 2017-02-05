import * as angular from 'angular';
import uiRouter from 'angular-ui-router';
import { UserTableModule } from './user-table';
import { UserDetailsModule } from './user-details';
import { UserService } from './user.service';

export const UserModule = angular
  .module('user', [
    uiRouter,
    UserDetailsModule,
    UserTableModule
  ])
  .service('UserService', UserService)
  .config(($stateProvider: angular.ui.IStateProvider) => {
    $stateProvider
    .state('allUsers', {
      url: '/users',
      component: 'userTable'
    });
  })
  .name;
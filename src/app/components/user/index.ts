import 'angular-ui-bootstrap';
import * as angular from 'angular';
import uiRouter from 'angular-ui-router';

import { UserTableModule } from './user-table';
import { UserDetailsModule } from './user-details';
import { UserService } from './user.service';

export const UserModule = angular
  .module('user', [
    uiRouter,
    'ui.bootstrap',
    UserDetailsModule,
    UserTableModule
  ])
  .factory('UserService', UserService.instance())
  .config(($stateProvider: angular.ui.IStateProvider) => {
    $stateProvider
    .state('allUsers', {
      url: '/users',
      component: 'userTable'
    });
  })
  .name;

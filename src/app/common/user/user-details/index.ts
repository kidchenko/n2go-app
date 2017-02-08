import * as angular from 'angular';
import uiRouter from 'angular-ui-router';
import { UserDetailsComponent } from './user-details.component';
import { UserService } from './../user.service';
import { User } from './../user.model';

export const UserDetailsModule = angular
  .module('userDetails', [
    uiRouter
  ])
  .component('userDetails', UserDetailsComponent)
  .config(($stateProvider: angular.ui.IStateProvider) => {
    $stateProvider
    .state('userDetails', {
      url: '/users/{id}',
      component: 'userDetails',
      resolve: {
        user: ($stateParams, UserService: UserService) : angular.IPromise<User> => {
          return UserService.get($stateParams.id)
            .then((u: User) => u);
        }
      }
    });
  })
  .name;

import * as angular from 'angular';
import uiRouter from 'angular-ui-router';
import { UserDetailsComponent } from './user-details.component';

export const UserDetailsModule = angular
  .module('userDetails', [
    uiRouter
  ])
  .component('userDetails', UserDetailsComponent)
  .config(($stateProvider: angular.ui.IStateProvider) => {
    $stateProvider
    .state('userDetails', {
      url: '/users/:id',
      component: 'userDetails',
    });
  })
  .name;

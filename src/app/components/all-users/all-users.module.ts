import * as angular from 'angular';
import uiRouter from 'angular-ui-router';
import { AllUsersComponent } from './all-users.component';
import { AllUsersService } from './all-users.service';

export const AllUsersModule = angular
  .module('allUsers', [
    uiRouter
  ])
  .component('allUsers', AllUsersComponent)
  .service('AllUsersService', AllUsersService)
  .name;

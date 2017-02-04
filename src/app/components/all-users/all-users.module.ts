import * as angular from 'angular';
import uiRouter from 'angular-ui-router';
import { AllUsersComponent } from './all-users.component';
// import './calendar.scss';

export const AllUsersModule = angular
  .module('allUsers', [
    uiRouter
  ])
  .component('allUsers', AllUsersComponent)
  .name;

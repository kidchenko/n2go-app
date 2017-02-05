import * as angular from 'angular';
import uiRouter from 'angular-ui-router';
import { UserDetailsComponent } from './user-details.component';

export const UserDetailsModule = angular
  .module('userDetails', [
    uiRouter
  ])
  .component('userDetails', UserDetailsComponent)
  .name;

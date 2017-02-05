import * as angular from 'angular';
import uiRouter from 'angular-ui-router';
import { UserRowDirective } from './user-row.directive';

export const UserRowModule = angular
  .module('userRow', [
    uiRouter
  ])
  .directive('userRow', UserRowDirective.instance)
  .name;

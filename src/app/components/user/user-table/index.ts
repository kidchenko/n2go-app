import * as angular from 'angular';
import uiRouter from 'angular-ui-router';
import { UserTableComponent } from './user-table.component';
import { UserRowModule } from './user-row';

export const UserTableModule = angular
  .module('userTable', [
    uiRouter,
    UserRowModule
  ])
  .component('userTable', UserTableComponent)
  .name;

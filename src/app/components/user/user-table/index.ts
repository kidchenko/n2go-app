import * as angular from 'angular';

import ngSanitize from 'angular-sanitize';
import uiRouter from 'angular-ui-router';
import 'ng-csv';

import { UserTableComponent } from './user-table.component';
import { UserRowModule } from './user-row';

export const UserTableModule = angular
  .module('userTable', [
    'ngSanitize',
    uiRouter,
    UserRowModule,
    'ngCsv'
  ])
  .component('userTable', UserTableComponent)
  .name;

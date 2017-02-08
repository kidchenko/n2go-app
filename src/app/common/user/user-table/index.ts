import * as angular from 'angular';

import ngSanitize from 'angular-sanitize';
import uiRouter from 'angular-ui-router';
import 'ng-csv';

import { UserTableComponent } from './user-table.component';
import { UserRowModule } from './user-row';
import { UserModalModule } from './../user-modal'

export const UserTableModule = angular
  .module('userTable', [
    'ngSanitize',
    'ngCsv',
    uiRouter,
    UserRowModule,
    UserModalModule
  ])
  .component('userTable', UserTableComponent)
  .name;

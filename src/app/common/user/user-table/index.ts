import * as angular from 'angular';

import uiRouter from 'angular-ui-router';

import { UserTableComponent } from './user-table.component';
import { UserRowModule } from './user-row';
import { UserModalModule } from './../user-modal';
import { ConfirmModalModule } from '../../../components/confirm-modal';

export const UserTableModule = angular
  .module('userTable', [
    'ngSanitize',
    uiRouter,
    UserRowModule,
    UserModalModule,
    ConfirmModalModule
  ])
  .component('userTable', UserTableComponent)
  .name;

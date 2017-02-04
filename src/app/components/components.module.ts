import * as angular from 'angular';
import { AllUsersModule } from './all-users/all-users.module';

export const ComponentsModule = angular.
  module('app.components', [
    AllUsersModule
    ])
  .name;

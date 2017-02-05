import * as angular from 'angular';
import { AllUsersModule } from './all-users/all-users.module';
import { UserDetailsModule } from './user-details/user-details.module';

export const ComponentsModule = angular.
  module('app.components', [
    AllUsersModule,
    UserDetailsModule
    ])
  .name;

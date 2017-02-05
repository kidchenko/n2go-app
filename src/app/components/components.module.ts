import * as angular from 'angular';
import { UserModule } from './user';


export const ComponentsModule = angular
  .module('app.components', [
    UserModule,
    ])
  .name;

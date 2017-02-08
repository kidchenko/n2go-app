import * as angular from 'angular';
import { FooterModule } from './footer';
import { HeaderModule } from './header';
import { UserModule } from './user';

export const CommonModule = angular
  .module('app.common', [
    FooterModule,
    HeaderModule,
    UserModule,
  ])
  .name;

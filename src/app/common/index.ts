import * as angular from 'angular';
import { FooterModule } from './footer';
import { HeaderModule } from './header';

export const CommonModule = angular
  .module('app.common', [
    FooterModule,
    HeaderModule
  ])
  .name;

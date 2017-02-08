import './header.scss';

import * as angular from 'angular';
import { HeaderComponent } from './header.component';

export const HeaderModule = angular
  .module('n2Header', [])
  .component('n2Header', HeaderComponent)
  .name;

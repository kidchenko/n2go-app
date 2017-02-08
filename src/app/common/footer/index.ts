import './footer.scss';

import * as angular from 'angular';
import { FooterComponent } from './footer.component';

export const FooterModule = angular
  .module('n2Footer', [])
  .component('n2Footer', FooterComponent)
  .name;

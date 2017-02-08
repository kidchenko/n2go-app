import './app.scss';

import * as angular from 'angular';


import 'angular-sanitize';
import 'angular-ui-bootstrap';

import uiRouter from 'angular-ui-router';

import { AppComponent } from './app.component';
import { CommonModule } from './common';
import { ComponentsModule } from './components';

import routesConfig from './app.routes';

export const name = 'app';

export const app = angular
      .module(name, [
        uiRouter,
        'ui.bootstrap',
        'ngSanitize',

        CommonModule,
        ComponentsModule
      ])
      .config(routesConfig)
      .component(name, AppComponent)
      .value('EventEmitter', payload => ({ $event: payload }));

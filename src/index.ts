import * as angular from 'angular';
import uiRouter from 'angular-ui-router';

import './index.scss';

import { AppComponent } from './app/app.component';
import routesConfig from './routes';

export const app: string = 'app';

angular
  .module(app, [ uiRouter ])
  .config(routesConfig)
  .component('app', AppComponent);

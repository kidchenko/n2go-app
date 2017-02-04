import * as angular from 'angular';
import uiRouter from 'angular-ui-router';

import './index.scss';

import { AppComponent } from './app/app.component';
import { ComponentsModule } from './app/components/components.module';

import routesConfig from './routes';

export const app: string = 'app';

angular
  .module(app, [
    uiRouter,
    ComponentsModule
  ])
  .config(routesConfig)
  .component('app', AppComponent);

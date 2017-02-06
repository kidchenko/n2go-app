import * as angular from 'angular';
import uiRouter from 'angular-ui-router';
import 'angular-ui-bootstrap';

import './index.scss';

import { AppComponent } from './app/app.component';
import { ComponentsModule } from './app/components/components.module';

import routesConfig from './routes';

export const app: string = 'app';

angular
  .module(app, [
    uiRouter,
    'ui.bootstrap',
    ComponentsModule
  ])
  .config(routesConfig)
  .component('app', AppComponent)
  .value('EventEmitter', payload => ({ $event: payload }))
  .run((UserService) => {
    UserService.cache();
  });

import * as angular from 'angular';

import uiRouter from 'angular-ui-router';
import axios from 'axios';

import 'angular-sanitize';
import 'angular-ui-bootstrap';

import './index.scss';

import { AppComponent } from './app/app.component';
import { ComponentsModule } from './app/components/components.module';

import routesConfig from './routes';

export const app: string = 'app';

axios.get('/data/users.json')
  .then(payload => payload.data)
  .then(users => {

    angular
      .module(app, [
        uiRouter,
        'ui.bootstrap',
        'ngSanitize',

        ComponentsModule
      ])
      .config(routesConfig)
      .component('app', AppComponent)
      .value('EventEmitter', payload => ({ $event: payload }))
      .value('json', users);

      angular.bootstrap(document, [app]);
});

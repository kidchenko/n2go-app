import * as angular from 'angular';
import axios from 'axios';
import { app } from './app/app';

import './index.scss';

import { AppComponent } from './app/app.component';

axios.get('/data/users.json')
  .then(payload => payload.data)
  .then(users => {

  app.value('json', users);

  angular.bootstrap(document.body, [app.name]);

});

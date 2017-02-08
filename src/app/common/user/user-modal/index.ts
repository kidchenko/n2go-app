import * as angular from 'angular';
import 'angular-ui-bootstrap';

import { UserModalComponent } from './user-modal.component';
import { UserModalService } from './user-modal.service';

export const UserModalModule = angular
  .module('userModal', [
    'ui.bootstrap'
  ])
  .component('userModal', UserModalComponent)
  .service('UserModalService', UserModalService)
  .name;

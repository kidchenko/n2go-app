import * as angular from 'angular';
import 'angular-ui-bootstrap';

import { ConfirmModalComponent } from './confirm-modal.component';
import { ConfirmModalService } from './confirm-modal.service';

export const ConfirmModalModule = angular
  .module('confirmModal', [
    'ui.bootstrap'
  ])
  .component('confirmModal', ConfirmModalComponent)
  .service('ConfirmModalService', ConfirmModalService)
  .name;

import * as angular from 'angular';

import { UserConfirmComponent } from './user-confirm.component';
import { UserConfirmService } from './user-confirm.service';


export const UserModalModule = angular
  .module('userConfirm', [])
  .component('userConfirm', UserConfirmComponent)
  .service('userConfirmService', UserConfirmService)
  .name;

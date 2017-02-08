import * as angular from 'angular';
import 'angular-mocks';

import { UserModalModule } from './index';
import { UserModalService } from './user-modal.service';
import { User } from './../user.model';

describe('service: user-modal.service', () => {

  let userModalService : UserModalService;
  let user =  new User({"id":1,"firstName":"Carl","lastName":"Ray","email":"cray0@paginegialle.it","country":"China","dateOfBirth":"1989-04-01T17:01:46Z"});

  beforeEach(() => {
    angular
      .module('app', [UserModalModule])
    angular.mock.module('app');
  });

  beforeEach(() => {
    inject((_UserModalService_: UserModalService) => {
      userModalService = _UserModalService_
    });
  });

  it('should open modal',() => {
      userModalService.show(user);
  });

});

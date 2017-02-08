import * as angular from 'angular';
import 'angular-mocks';

import { UserModule } from './index';
import { UserService } from './user.service'

describe("service: user.service", () => {

  let userService : UserService;

  beforeEach(() => {
    angular
      .module('app', [UserModule])
      .value('json', [{"id":1,"firstName":"Carl","lastName":"Ray","email":"cray0@paginegialle.it","country":"China","dateOfBirth":"1989-04-01T17:01:46Z"}])
    angular.mock.module('app')
      ;
  });

  beforeEach(() => {
    inject((_UserService_: UserService) => {
      userService = _UserService_
    });
  });

  it("should initialize correctly", () => {
    expect(userService).toBeDefined();
  });

  it('should get user', () => {
    userService.get(1).then((user) => {
      console.log(user);
      expect(user.id).toBe(1);
    })
  });

});

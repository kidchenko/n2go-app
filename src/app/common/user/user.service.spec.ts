import * as angular from 'angular';
import 'angular-mocks';

import { UserService } from './user.service';

describe("service: user.service", () => {

  let UserService : UserService

  beforeEach(angular.mock.module('app'));

  beforeEach(() => {
    inject((_UserService_: UserService) => {
      UserService = _UserService_
    });
  });

  it("should initialize correctly", () => {
    expect(UserService).toBeDefined();
  });

});

import * as angular from 'angular';
import 'angular-mocks';

import { UserModule } from './index';
import { UserService } from './user.service'
import { IUser } from './user.model';

describe("service: user.service", () => {

  let userService : UserService;
  let user: IUser;
  let now: Date;
  const json = [ {"id":1,"firstName":"Carl","lastName":"Ray","email":"cray0@paginegialle.it","country":"China","dateOfBirth":"1989-04-01T17:01:46Z"} ];

  beforeEach(() => {
    angular
      .module('app', [ UserModule ])
      .value('json', json)
    angular.mock.module('app');
    user = <IUser>{
      country: 'Brazil',
      dateOfBirth: new Date(1991, 5, 20),
      email: 'kidchenko@gmail.com',
      firstName: 'José',
      id: 1,
      lastName: 'Barbosa'
    };
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
      expect(user.id).toBe(1);
    })
  });

  it('should calculate the age', () => {
    expect(userService.getAge(user)).toBe(25);
  })

});

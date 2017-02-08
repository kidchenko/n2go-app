
import * as angular from 'angular';
import 'angular-mocks';

import { UserRowDirective } from './user-row.directive';

describe('directive: user-row', () => {
  beforeEach(() => {
    angular
      .module('app', [])
      .directive('app', UserRowDirective.instance);
    angular.mock.module('app');
  });

  it('should render', angular.mock.inject(($rootScope: ng.IRootScopeService, $compile: ng.ICompileService) => {
    const element = $compile('<tr user-row></tr user-row')($rootScope);
    $rootScope.$digest();
    const td = element.find('td');
    expect(td).toBeTruthy();
  }));

});

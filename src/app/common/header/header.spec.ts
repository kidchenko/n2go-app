import * as angular from 'angular';
import 'angular-mocks';

import { HeaderComponent } from './header.component';

describe('component: header', () => {
  beforeEach(() => {
    angular
      .module('app', [])
      .component('n2Header', HeaderComponent);
    angular.mock.module('app');
  });

  it('should render n2-header', angular.mock.inject(($rootScope: ng.IRootScopeService, $compile: ng.ICompileService) => {
    const element = $compile('<n2-header></n2-header')($rootScope);
    $rootScope.$digest();
    const header = element.find('header');
    expect(header.hasClass('n2-header')).toBeTruthy();
  }));

});

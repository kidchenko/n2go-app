import * as angular from 'angular';
import 'angular-mocks';

import { AppComponent } from './app.component';

describe('component: app', () => {
  beforeEach(() => {
    angular
      .module('app', [])
      .component('app', AppComponent);
    angular.mock.module('app');
  });

  it('should render hello world', angular.mock.inject(($rootScope: ng.IRootScopeService, $compile: ng.ICompileService) => {
    const element = $compile('<app></app')($rootScope);
    $rootScope.$digest();
    const main = element.find('main');
    expect(main.hasClass('container')).toBeTruthy();
  }));

});

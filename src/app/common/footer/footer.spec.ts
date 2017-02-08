import * as angular from 'angular';
import 'angular-mocks';

import { FooterComponent } from './footer.component';

describe('component: footer', () => {
  beforeEach(() => {
    angular
      .module('app', [])
      .component('n2Footer', FooterComponent);
    angular.mock.module('app');
  });

  it('should render n2-footer', angular.mock.inject(($rootScope: ng.IRootScopeService, $compile: ng.ICompileService) => {
    const element = $compile('<n2-footer></n2-footer')($rootScope);
    $rootScope.$digest();
    const p = element.find('footer p');

    expect(p.html('n2-footer')).toBeTruthy();
  }));

});

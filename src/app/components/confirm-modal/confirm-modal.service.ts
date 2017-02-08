import { ConfirmModalController } from './confirm-modal.controller';

export class ConfirmModalService {

  static $inject: string[] = ['$uibModal'];

  constructor(private $modal: angular.ui.bootstrap.IModalService) { }

  confirm() {
    return this.$modal.open({
        template: require('./confirm-modal.html'),
        bindToController: true,
        controllerAs: '$ctrl',
        controller: ConfirmModalController,
      });
  }

}

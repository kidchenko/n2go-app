import { UserConfirmController } from './user-confirm.controller';

export class UserConfirmService {

  constructor(private $modal: angular.ui.bootstrap.IModalService) { }

  confirm() {
    return this.$modal.open({
        template: require('./user-confirm.html'),
        bindToController: true,
        controllerAs: '$ctrl',
        controller: UserConfirmController,
      });
  }

}

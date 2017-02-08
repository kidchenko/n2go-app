import { User } from './../user.model';

export class UserModalController {

  static $inject = ['$uibModalInstance', 'user'];

  constructor(private $modalInstance : angular.ui.bootstrap.IModalServiceInstance,
              public user: User) { }

  ok() {
    return this.$modalInstance.close();
  }

  cancel() {
    return this.$modalInstance.dismiss();
  }

}


export class UserModalController {

  static $inject = ['$uibModalInstance', 'user'];

  constructor(private $modalInstance : angular.ui.bootstrap.IModalServiceInstance, public user) { }

  ok() {
    this.$modalInstance.close();
  }

  cancel() {
    this.$modalInstance.dismiss();
  }

}

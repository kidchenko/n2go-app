export class UserConfirmController {

  static $inject = ['$uibModalInstance'];

  constructor(private $modalInstance : angular.ui.bootstrap.IModalServiceInstance) { }

  ok() {
    this.$modalInstance.close();
  }

  cancel() {
    this.$modalInstance.dismiss();
  }

}

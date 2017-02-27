import { IUser } from './../user.model';
import { UserService } from './../user.service';

export class UserModalController {

  static $inject = ['$uibModalInstance', 'user', 'UserService'];
  fullName: string;
  age: number;

  constructor(private $modalInstance : angular.ui.bootstrap.IModalServiceInstance,
              public user: IUser,
              private userService: UserService) { }

  $onInit() {
    this.fullName = this.userService.getFullName(this.user);
    this.age = this.userService.getAge(this.user);
  }

  ok() {
    return this.$modalInstance.close();
  }

  cancel() {
    return this.$modalInstance.dismiss();
  }

}

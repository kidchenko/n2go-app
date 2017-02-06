import { UserService } from './../user.service';

export class UserTableController {

  static $inject: string[] = ['UserService', '$state'];
  users: any[];
  page: number;

  constructor(private userService: UserService,
              private $state: angular.ui.IStateService) {}

  $onInit() {
    this.userService.page().then((users: any[]) => this.users = users);
  }

  openShowModal($event) {
    this.userService.showUser($event.user);
  }

  deleteRow($event) {
    this.users = this.userService.deleteUser($event.user);
  }

  navigateToEdit($event) {
    this.$state.transitionTo('userDetails', { id : $event.user.id });
  }
}

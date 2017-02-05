import { UserService } from './../user.service';

export class UserTableController {

  static $inject: string[] = ['UserService'];
  users: any[];
  page: number;

  constructor(private userService: UserService) {}

  $onInit() {
    this.userService.page().then((users: any[]) => this.users = users);
  }

  openShowModal($event) {
    this.userService.showUser($event.user);
  }

  deleteRow($event) {
    console.log($event);
  }

  navigateToEdit($event) {
    console.log($event);
  }
}

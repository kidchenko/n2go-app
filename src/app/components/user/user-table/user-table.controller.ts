import { UserService } from './../user.service';

export class UserTableController {

  static $inject: string[] = ['UserService'];
  users: any[];
  page: number;

  constructor(private userService: UserService) {}

  $onInit() {
    this.userService.loadUsers().then((response: any[]) => this.users = response);
  }
}

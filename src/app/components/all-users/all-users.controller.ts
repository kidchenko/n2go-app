import { AllUsersService } from './all-users.service';

export class AllUsersController {

  static $inject: string[] = ['AllUsersService'];
  users: any[];

  constructor(private allUserService: AllUsersService) {}

  $onInit() {
    this.allUserService.loadUsers().then((response: any[]) => this.users = response);
  }
}

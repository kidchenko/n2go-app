import { UserService } from './../user.service';

export class UserDetailsController {

  static $inject: string[] = ['UserService', '$stateParams'];

  user: any;

  constructor(private userService: UserService,
              private $stateParams: angular.ui.IStateParamsService ) {

  }

  $onInit() {
    this.userService.get((<any>this.$stateParams).id).then((data) => this.user = data);
  }

 }

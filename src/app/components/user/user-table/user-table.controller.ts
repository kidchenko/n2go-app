import { UserService } from './../user.service';

export class UserTableController {

  static $inject: string[] = ['UserService', '$state'];

  selecteds: any[] = [];
  users: any[] = [];
  page: number = 1;
  rowsPerPage: number = 10;

  constructor(private userService: UserService,
              private $state: angular.ui.IStateService) {}

  $onInit() {
    this.refresh();
  }

  openShowModal($event) {
    this.userService.show($event.user);
  }

  deleteRow($event) {
    this.userService.delete($event.user);
    this.refresh();
  }

  navigateToEdit($event) {
    this.$state.transitionTo('userDetails', { id : $event.user.id });
  }

  selectUser($event) {
    var index = this.selecteds.indexOf($event.user);

    if (index === -1) {
      this.selecteds.push($event.user);
    } else {
      this.selecteds.splice(index, 1);
    }
  }

  next() {
    this.incrementPage();
    this.refresh();
  }

  previous() {
    if (this.page > 1) {
      this.decrementPage();
      this.refresh();
    }
  }

  deleteSelecteds() {
    console.log(this.selecteds);
  }

  downloadSelecteds() {
    console.log(this.selecteds);
  }

  private incrementPage() {
    this.page++;
  }

  private decrementPage() {
    this.page--;
  }

  private refresh() {
    this.userService.page(this.page, this.rowsPerPage).then((users: any[]) => this.users = users);
  }

}

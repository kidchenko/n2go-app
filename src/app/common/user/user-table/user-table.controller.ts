import { IUser } from './../user.model';
import { UserService } from './../user.service';

export interface IUserTableEvent {
  user: IUser;
}

export class UserTableController {

  static $inject: string[] = ['UserService'];

  selecteds: IUser[] = [];
  users: IUser[] = [];
  page: number = 1;
  rowsPerPage: number = 10;

  constructor(private userService: UserService,
              private $state: angular.ui.IStateService) {}

  $onInit() {
    this.refresh();
  }

  openShowModal($event: IUserTableEvent) {
    console.log($event);
    this.userService.show($event.user);
  }

  navigateToEdit($event: IUserTableEvent) {
    this.userService.goToEditPage($event.user);
  }

  deleteRow($event: IUserTableEvent) {
    this.userService.delete($event.user)
      .then((user: IUser) => {
        this.deleteFromSelecteds(user);
        this.refresh();
      });
  }

  selectUser($event: IUserTableEvent) {
    let index = this.selecteds.indexOf($event.user);

    if (index === -1) {
      this.selecteds = this.selecteds.concat($event.user);
    } else {
      this.selecteds = this.selecteds.filter((e) => e.id !== $event.user.id);
    }
  }

  next() {
    let total = this.userService.total();
    if (this.page * this.rowsPerPage <  total) {
      this.incrementPage();
      this.refresh();
    }
  }

  previous() {
    if (this.page > 1) {
      this.decrementPage();
      this.refresh();
    }
  }

  deleteSelecteds() {
    this.selecteds.forEach((e) => {
      this.userService.delete(e);
      this.refresh();
    });
    this.selecteds = [];
  }

  private deleteFromSelecteds(user: IUser) {
    this.selecteds = this.selecteds.filter((u) => u.id !== user.id);
  }

  private incrementPage() {
    this.page++;
  }

  private decrementPage() {
    this.page--;
  }

  private refresh() {
    this.userService.page(this.page, this.rowsPerPage)
      .then((users: IUser[]) => {
        this.users = users;
      });
  }

}

import { UserService } from './../user.service';
import { UserModalService } from './../user-modal/user-modal.service';

export class UserTableController {

  static $inject: string[] = ['UserService'];

  selecteds: any[] = [];
  users: any[] = [];
  page: number = 1;
  rowsPerPage: number = 10;

  constructor(private userService: UserService) {}

  $onInit() {
    this.refresh();
  }

  openShowModal($event) {
    this.userService.show($event.user);
  }

  deleteRow($event) {
    this.userService.delete($event.user)
      .then((user) => {
        this.deleteFromSelecteds(user);
        this.refresh();
      });
  }

  navigateToEdit($event) {

  }

  selectUser($event) {
    let index = this.selecteds.indexOf($event.user);

    if (index === -1) {
      this.selecteds = this.selecteds.concat($event.user);
    } else {
      this.selecteds = this.selecteds.filter((e) => e.id !== $event.user.id);
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
    this.selecteds.forEach((e) => {
      this.userService.delete(e);
      this.refresh();
    });
    this.selecteds = [];
  }

  private deleteFromSelecteds(user) {
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
      .then((users: any[]) => {
        this.users = users
      });
  }

}

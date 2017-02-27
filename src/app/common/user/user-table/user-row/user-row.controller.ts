import { IUser } from './../../user.model';
import { IUserTableEvent } from './../user-table.controller'

export class UserRowController {

  static $inject: string[] = ['EventEmitter'];

  constructor(private eventEmitter: (e : IUserTableEvent) => void) { }

  show(user: IUser) {
    (<any>this).onShow(this.eventEmitter({
      user
    }));
  }

  edit(user: IUser) {
    (<any>this).onEdit(this.eventEmitter({
      user
    }));
  }

  delete(user: IUser) {
    (<any>this).onDelete(this.eventEmitter({
      user
    }));
  }

  toggle(user: IUser) {
    (<any>this).onSelect(this.eventEmitter( {
      user
    }));
  }

}

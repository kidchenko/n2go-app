import { User } from './../../user.model';

export class UserRowController {

  static $inject: string[] = ['EventEmitter'];

  constructor(private eventEmitter: any) { }

  show(user: User) {
    (<any>this).onShow(this.eventEmitter({
      user
    }));
  }

  edit(user: User) {
    (<any>this).onEdit(this.eventEmitter({
      user
    }));
  }

  delete(user: User) {
    (<any>this).onDelete(this.eventEmitter({
      user
    }));
  }

  toggle(user: User) {
    (<any>this).onSelect(this.eventEmitter({
      user
    }));
  }

}

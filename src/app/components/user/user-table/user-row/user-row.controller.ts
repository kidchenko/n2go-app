interface IUserRowScope extends ng.IScope {
  user : any;
  $ctrl: any;
}

export class UserRowController {

  static $inject: string[] = ['EventEmitter'];

  constructor(private eventEmitter) { }

  show(user) {
    (<any>this).onShow(this.eventEmitter({
      user
    }));
  }

  edit(user) {
    (<any>this).onEdit(this.eventEmitter({
      user
    }));
  }

  delete(user) {
    (<any>this).onDelete(this.eventEmitter({
      user
    }));
  }
}

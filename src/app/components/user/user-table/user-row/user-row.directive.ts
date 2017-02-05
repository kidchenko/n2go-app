import { UserRowController } from './user-row.controller';

export class UserRowDirective implements ng.IDirective {

  restrict = 'E';

  scope = {
    user: '<',
    onShow: '&',
    onEdit: '&',
    onDelete: '&'
  };

  bindToController = true;

  controllerAs = '$ctrl';

  controller = UserRowController;

  template = require('./user-row.html');

  static instance(): ng.IDirective {
    return new UserRowDirective();
  }

}

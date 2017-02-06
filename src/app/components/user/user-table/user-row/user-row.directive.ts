import { UserRowController } from './user-row.controller';

export class UserRowDirective implements ng.IDirective {

  restrict = 'A';

  scope = {
    user: '<',
    onShow: '&',
    onEdit: '&',
    onDelete: '&',
    onSelect: '&'
  };

  bindToController = true;

  controllerAs = '$ctrl';

  controller = UserRowController;

  template = require('./user-row.html');

  static instance(): ng.IDirective {
    return new UserRowDirective();
  }

}

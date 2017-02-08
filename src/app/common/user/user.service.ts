import { User } from './user.model';
import { UserModalService } from './user-modal/user-modal.service';
import { ConfirmModalService } from '../../components/confirm-modal/confirm-modal.service';

export class UserService {

  public static $inject: string[] = ['json', 'UserModalService', 'ConfirmModalService', '$q', '$state'];

  public static instance() {

    let factory = (json, UserModalService, ConfirmModalService, $q, $state) => {
      return new UserService(json, UserModalService, ConfirmModalService, $q, $state);
    };

    factory.$inject = ['json', 'UserModalService', 'ConfirmModalService', '$q', '$state'];
    return factory;
  }

  constructor(private json: User[],
              private UserModalService: UserModalService,
              private ConfirmModalService: ConfirmModalService,
              private $q: angular.IQService,
              private $state: angular.ui.IStateService) { }


  save(user: User) {
    let index = this.json.findIndex((u: User) => {
      return u.id === user.id;
    });

    this.json[index] = user;
  }


  show(user: User) {
    this.UserModalService.show(user);
  }

  goToEditPage(user: User) {
    this.$state.transitionTo('userDetails', { id : user.id });
  }

  confirm() {
    return this.ConfirmModalService.confirm();
  }

  get(id: number) : angular.IPromise<User> {
    let user = this.findOne(id);
    return this.promise(new User(user));
  }

  delete(user: User) {
    this.json = this.json.filter(e => e.id !== user.id);
    return this.promise(user);
  }

  page(page: number, rowsPerPage: number) {
    let start = (page - 1) * rowsPerPage + 1;
    let tenRows = this.json.slice(start - 1, (start + rowsPerPage) - 1).map(x => new User(x));

    return this.promise(tenRows);
  }

  total() {
    return this.json.length;
  }



  private findOne(id: number) {
    let user = this.json.filter((u: User) => u.id === Number(id))[0];
    return user;
  }

  private promise(data: any) {
    let deferred = this.$q.defer();
    deferred.resolve(data);
    return deferred.promise;
  }

}

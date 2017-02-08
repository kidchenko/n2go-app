import { User } from './user.model';
import { UserModalService } from './user-modal/user-modal.service';

export class UserService {

  static $inject: string[] = ['json', 'UserModalService', '$q', '$state'];
  private deferred: angular.IDeferred<any>;

  constructor(private json: User[],
              private UserModalService: UserModalService,
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


  get(id: number) : angular.IPromise<User> {
    let user = this.findOne(id);
    return this.promise(user);
  }

  delete(user: User) {
    this.json = this.json.filter(e => e.id !== user.id);
    return this.promise(user);
  }

  page(page: number, rowsPerPage: number) {

    let start = (page - 1) * rowsPerPage + 1;
    console.log(start);
    console.log((start + rowsPerPage) -1);
    let tenRows = this.json.slice(start - 1, (start + rowsPerPage) -1);

    return this.promise(tenRows);
  }

  private findOne(id: number) {
    let user = this.json.filter((u: User) => u.id === Number(id))[0];
    return user;
  }

  private promise(data) {
    let deferred = this.$q.defer();
    deferred.resolve(data);
    return deferred.promise;
  }

  public static instance() {

    let factory = (json, UserModalService, $q, $state) => {
      return new UserService(json, UserModalService, $q, $state);
    };

    factory.$inject = ['json', 'UserModalService', '$q', '$uibModal', '$state'];
    return factory;
  }

}

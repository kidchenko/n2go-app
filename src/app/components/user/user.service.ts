import { User } from './user.model';
import { UserModalController } from './user-modal.controller';

export class UserService {

  static $inject: string[] = ['json', '$q', '$uibModal'];
  private deferred: angular.IDeferred<any>;

  constructor(private json: User[],
              private $q: angular.IQService,
              private $modal: angular.ui.bootstrap.IModalService) { }

  show(user: User) {
    this.$modal.open({
      template: require('./user.html'),
      bindToController: true,
      controllerAs: '$ctrl',
      controller: UserModalController,
      resolve: {
        user: () => {
          return user;
        }
      }
    });
  }

  save(user: User) {
    let index = this.json.findIndex((u: User) => {
      return u.id === user.id;
    });
    console.log(index);
    this.json[index] = user;
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
    let teenRows = this.json.slice(start - 1, (start + rowsPerPage) -1);

    return this.promise(teenRows);
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

    let factory = (json, $q, $uibModal) => {
      return new UserService(json, $q, $uibModal);
    };

    factory.$inject = ['json', '$q', '$uibModal'];
    return factory;
  }

}

import { UserModalController } from './user-modal.controller';

export class UserService {

  static $inject: string[] = ['json', '$q', '$uibModal'];
  private deferred: angular.IDeferred<any>;

  constructor(private json,
              private $q: angular.IQService,
              private $modal: angular.ui.bootstrap.IModalService) { }

  get(id: number) {
    return this.resolveUser(id);
  }

  show(user) {
    this.$modal.open({
      template: require('./user.html'),
      bindToController: true,
      controllerAs: '$ctrl',
      controller: UserModalController,
      resolve: {
        user: () => {
          return user;
        }
      },
    });
  }

  delete(user) {
    this.deferred = this.$q.defer();

    this.json = this.json.filter(e => e.id !== user.id);
    return this.returnPromise(this.json);
  }

  page(page: number, rowsPerPage: number) {
    this.deferred = this.$q.defer();

    let start = (page - 1) * rowsPerPage + 1;
    this.deferred.resolve(this.json.slice(start - 1, (start + rowsPerPage) -1));

    return this.deferred.promise;
  }

  private resolveUser(id: number) {

    this.deferred = this.$q.defer();
    let findOne = this.json.filter(e => e.id === id)[0];

    return this.returnPromise(findOne);
  }

  private returnPromise(data) {

    this.deferred.resolve(data);
    return this.deferred.promise;
  }

  public static instance() {

    let factory = (json, $q, $uibModal) => {
      return new UserService(json, $q, $uibModal);
    };

    factory.$inject = ['json', '$q', '$uibModal'];
    return factory;
  }

}

import { UserModalController } from './user-modal.controller';

export class UserService {

  static $inject: string[] = ['$http', '$q', '$uibModal'];
  private json: any[];
  private deferred: angular.IDeferred<any>;

  constructor(private $http: angular.IHttpService,
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
    return this.resolve(this.json);
  }

  page(page: number, rowsPerPage: number) {
    this.deferred = this.$q.defer();

    let start = (page - 1) * rowsPerPage + 1;
    this.deferred.resolve(this.json.slice(start - 1, start + rowsPerPage));

    return this.deferred.promise;
  }

  cache() {

    this.deferred = this.$q.defer();

    if (this.json) {
      return this.resolve(this.json);
    }

    return this.sendRequest()
      .then((users: any[]) => {
        this.json = users;
        return this.resolve(this.json);
      })
      .catch(reson => this.deferred.reject(reson));;
  }

  private sendRequest() {

    let promise = this.$http.get('/data/users.json');

    return promise.then(response => response.data);
  }

  private resolveUser(id: number) {

    this.deferred = this.$q.defer();
    let findOne = this.json.filter(e => e.id === id)[0];

    return this.resolve(findOne);
  }

  private resolve(data) {

    this.deferred.resolve(data);
    return this.deferred.promise;
  }

  public static instance() {

    let factory = ($http, $q, $uibModal) => {
      return new UserService($http, $q, $uibModal);
    };

    factory.$inject = ['$http', '$q', '$uibModal'];
    return factory;
  }

}

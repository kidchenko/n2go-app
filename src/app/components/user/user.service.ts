import { UserModalController } from './user-modal.controller';

export class UserService {

  static $inject: string[] = ['$http', '$q', '$uibModal'];
  private users: any[];
  private deferred;

  constructor(private $http: angular.IHttpService,
              private $q: angular.IQService,
              private $modal: angular.ui.bootstrap.IModalService) { }

  getUser(id: number) {
    return this.resolveUser(id);
  }

  showUser(user) {
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

  deleteUser(user) {
    this.users = this.users.filter(e => e.id != user.id);
    return this.users;
  }

  page() {
    this.deferred = this.$q.defer();

    if (this.users) {
      return this.resolve();
    }
    return this.sendRequest();
  }

  private sendRequest() {
    var promise = this.$http.get('/data/users.json');
    return promise.then(response => this.cacheAndResolve(response))
    .catch(reson => this.deferred.reject(reson));
  }

  private resolveUser(id: number) {
    this.deferred = this.$q.defer();
    let findOne = this.users[id - 1];
    this.deferred.resolve(findOne);
    return this.deferred.promise;
  }

  private resolve() {
    this.deferred.resolve(this.users);
    return this.deferred.promise;
  }

  private cacheAndResolve(response: angular.IHttpPromiseCallbackArg<any>) {
    this.users = response.data;
    return this.resolve();
  }

  public static instance() {

    var factory = ($http, $q, $uibModal) => {
      return new UserService($http, $q, $uibModal);
    };

    factory.$inject = ['$http', '$q', '$uibModal'];
    return factory;
  }

}

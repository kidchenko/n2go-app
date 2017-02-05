export class AllUsersService {

  static $inject: string[] = ['$http', '$q'];
  private users: any[];
  private deferred;

  constructor(private $http: angular.IHttpService, private $q: angular.IQService) { }

  loadUsers() {
    this.deferred = this.$q.defer();

    if (this.users) {
      this.resolve();
    }
    this.$http.get('/data/users.json').then(response => this.cacheAndResolve(response))
    .catch(reson => this.deferred.reject(reson));

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
}

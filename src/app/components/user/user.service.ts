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
    let modalInstance = this.$modal.open({
      template: 'name: {{$ctrl.user.id}}{{user.id}}',
      bindToController: true,
      controllerAs: '$ctrl',
      resolve: {
        user: () => user
      }
    });

    modalInstance.result.then((selectedItem) => {
      console.log(selectedItem);
    }, () => {
      console.log('Modal dismissed at: ' + new Date());
    });
  }

page() {
    this.deferred = this.$q.defer();

    if (this.users) {
      this.resolve();
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

}

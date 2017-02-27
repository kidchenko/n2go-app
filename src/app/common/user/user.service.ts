import { IUser } from './user.model';
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

  constructor(private json: IUser[],
              private UserModalService: UserModalService,
              private ConfirmModalService: ConfirmModalService,
              private $q: angular.IQService,
              private $state: angular.ui.IStateService) { }


  save(user: IUser) {
    let index = this.json.findIndex((u: IUser) => {
      return u.id === user.id;
    });

    this.json[index] = user;
  }

  show(user: IUser) {
    this.UserModalService.show(user);
  }

  goToEditPage(user: IUser) {
    this.$state.transitionTo('userDetails', { id : user.id });
  }

  confirm() {
    return this.ConfirmModalService.confirm();
  }

  get(id: number) : angular.IPromise<IUser> {
    let user = this.findOne(id);
    return this.promise(<IUser>user);
  }

  delete(user: IUser) {
    this.json = this.json.filter(e => e.id !== user.id);
    return this.promise(user);
  }

  page(page: number, rowsPerPage: number) {
    let start = (page - 1) * rowsPerPage + 1;
    let tenRows = this.json.slice(start - 1, (start + rowsPerPage) - 1).map(x => <IUser>(x));

    return this.promise(tenRows);
  }

  total() {
    return this.json.length;
  }

  getAge(user: IUser): number {
    var ageDif = this.ageDifFromBirth(user);
    return this.calcuteDif(ageDif);
  }

  getFullName(user: IUser) {
    return `${user.firstName} ${user.lastName}`;
  }

  private ageDifFromBirth(user: IUser) {
    let now = Date.now();
    let myBirthday = (new Date(user.dateOfBirth)).getTime();
    return now - myBirthday;
  }

  private calcuteDif(ageDif: number) {
    var ageDate = new Date(ageDif);  // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  private findOne(id: number) {
    let user = this.json.filter((u: IUser) => u.id === Number(id))[0];
    return user;
  }

  private promise(data: any) {
    let deferred = this.$q.defer();
    deferred.resolve(data);
    return deferred.promise;
  }

}

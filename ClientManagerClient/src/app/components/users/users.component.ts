import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from 'src/app/actions/userActions';
import { UserModel } from 'src/app/model/userModel';
import { Observable } from 'rxjs';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {
  userList: Observable<Array<UserModel>>;
  updatedUser: UserModel;
  newUser: UserModel = {
    firstName: '',
    lastName: '',
    address: '',
    email: '',
    id: ''
  };
  constructor(
    private store: Store<any>,
    private loadingService: LoadingService
  ) { }

  ngOnDestroy(): void {

  }

  ngOnInit(): void {
    this.userList = this.store.select('users');
    this.store.dispatch(new actions.GetUsers());
  }

  delete(user: UserModel): void {
    if (confirm('Are you sure?')) {
      this.store.dispatch(new actions.DeleteUser(user.id));
    }
  }

  update(): void {
    this.store.dispatch(new actions.UpdateUser(JSON.parse(JSON.stringify(this.updatedUser))));
    this.updatedUser = null;
  }

  edit(user: UserModel): void {
    this.updatedUser = JSON.parse(JSON.stringify(user));
  }

  isUpdated(user: UserModel): boolean {
    if (!this.updatedUser) { return false; }
    return this.updatedUser.id === user.id;
  }

  add(): void {
    this.store.dispatch(new actions.AddUser(JSON.parse(JSON.stringify(this.newUser))));
    this.newUser = {
      firstName: '',
      lastName: '',
      address: '',
      email: '',
      id: ''
    };
  }
}

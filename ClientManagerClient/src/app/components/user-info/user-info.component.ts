import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserModel } from 'src/app/model/userModel';
import { Store } from '@ngrx/store';
import * as actions from 'src/app/actions/userActions';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit, OnDestroy {
  user: Observable<UserModel>;
  userForUpdate: UserModel;
  private _subsriptions: Array<Subscription> = [];
  constructor(
    private route: ActivatedRoute,
    private store: Store<any>
  ) { }

  ngOnDestroy(): void {
    this._subsriptions.forEach(s => s.unsubscribe());
  }

  ngOnInit(): void {
    const userId = this.route.snapshot.paramMap.get('id');
    this.user = this.store.select('selectedUser');
    this._subsriptions.push(this.user.subscribe((user: UserModel) => {
      if (user) {
        this.userForUpdate = JSON.parse(JSON.stringify(user));
      }
    }));
    this.store.dispatch(new actions.GetUser(userId));
  }

}

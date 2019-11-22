import { mergeMap, map, catchError } from 'rxjs/operators';
import { Effect, ofType, Actions, act } from '@ngrx/effects';
import { DataService } from '../services/data.service';
import { Injectable } from '@angular/core';
import * as actions from '../actions/userActions';
import { of } from 'rxjs';
import { LoadingService } from '../services/loading.service';

@Injectable()
export class UserEffects {

    constructor(
        private actions$: Actions,
        private dataService: DataService,
        private loadingService: LoadingService
    ) { }

    @Effect()
    getUsers = this.actions$.pipe(
        ofType(actions.GET_USERS),
        mergeMap(() => {
            return this.dataService.getData('api/ClientManager/GetUsers').pipe(
                map(res => {
                    this.loadingService.isLoading = false;
                    return new actions.GetUsersSuccessed(res);
                })
            );
        }
        )
    );

    @Effect()
    getUser = this.actions$.pipe(
        ofType(actions.GET_USER),
        mergeMap((action: actions.GetUser) => {
            return this.dataService.getData('api/ClientManager/GetUser/' + action.payLoad).pipe(
                map(res => {
                    this.loadingService.isLoading = false;
                    return new actions.GetUserSuccessed(res);
                })
            );
        }
        )
    );

    @Effect()
    deleteUser = this.actions$.pipe(
        ofType(actions.DELETE_USER),
        mergeMap((action: actions.DeleteUser) => {
            return this.dataService.updateData('api/ClientManager/DeleteUser', { id: action.payLoad }).pipe(
                map(() => {
                    this.loadingService.isLoading = false;
                    return new actions.GetUsers();
                })
            );
        }
        ),
        catchError(
            err => of(new actions.Error())
          )
    );

    @Effect()
    addUser = this.actions$.pipe(
        ofType(actions.ADD_USER),
        mergeMap((action: actions.AddUser) => {
            return this.dataService.updateData('api/ClientManager/AddUser', action.payLoad).pipe(
                map(() => {
                    this.loadingService.isLoading = false;
                    return new actions.GetUsers();
                })
            );
        }
        ),
        catchError(
            err => of(new actions.Error())
          )
    );

    @Effect()
    updateUser = this.actions$.pipe(
        ofType(actions.UPDATE_USER),
        mergeMap((action: actions.UpdateUser) => {
            return this.dataService.updateData('api/ClientManager/UpdateUser', action.payLoad).pipe(
                map(() => {
                    this.loadingService.isLoading = false;
                    return new actions.GetUsers();
                })
            );
        }
        ),
        catchError(
            err => of(new actions.Error())
          )
    );
}

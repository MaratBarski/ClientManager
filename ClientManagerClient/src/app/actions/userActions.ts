import { Action } from '@ngrx/store';
import { UserModel } from '../model/userModel';

export const ERROR = '[Users] ERROR';

export const GET_USERS = '[Users] Get';
export const GET_USERS_SUCC = '[Users] Get Succ';

export const GET_USER = '[User] Get';
export const GET_USER_SUCC = '[User] Get Succ';

export const ADD_USER = '[User] Add';
export const ADD_USER_SUCC = '[User] Add Succ';

export const UPDATE_USER = '[User] Update';
export const UPDATE_USER_SUCC = '[User] Update Succ';

export const DELETE_USER = '[User] Delete';
export const DELETE_USER_SUCC = '[User] Delete Succ';

// tslint:disable-next-line:no-namespace

export class GetUsers implements Action {
    readonly type = GET_USERS;
}

export class GetUsersSuccessed implements Action {
    readonly type = GET_USERS_SUCC;
    constructor(public payLoad: Array<UserModel>) {}
}

export class GetUser implements Action {
    readonly type = GET_USER;
    constructor(public payLoad: string) {}
}

export class GetUserSuccessed implements Action {
    readonly type = GET_USER_SUCC;
    constructor(public payLoad: UserModel) {}
}

export class AddUser implements Action {
    readonly type = ADD_USER;
    constructor(public payLoad: UserModel) { }
}

export class AddUserSuccessed implements Action {
    readonly type = ADD_USER_SUCC;
    constructor(public payLoad: UserModel) { }
}

export class UpdateUser implements Action {
    readonly type = UPDATE_USER;
    constructor(public payLoad: UserModel) { }
}

export class UpdateUserSuccessed implements Action {
    readonly type = UPDATE_USER_SUCC;
    constructor(public payLoad: UserModel) { }
}

export class DeleteUser implements Action {
    readonly type = DELETE_USER;
    constructor(public payLoad: string) { }
}

export class DeleteUserSuccessed implements Action {
    readonly type = DELETE_USER_SUCC;
    constructor(public payLoad: string) { }
}

export class Error implements Action {
    readonly type = ERROR;
}

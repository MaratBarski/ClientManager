import * as actions from '../actions/userActions';

export class UserModel {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    address: string;
}


export function userReducer(state: Array<UserModel> = [], act: { type: string, payLoad: any }): Array<UserModel> {
    switch (act.type) {
        case (actions.GET_USERS_SUCC):
            return act.payLoad;
        default:
            return state;
    }
}

export function selectedUserReducer(state: UserModel, act: { type: string, payLoad: any }): UserModel {
    switch (act.type) {
        case (actions.GET_USER_SUCC):
            return act.payLoad;
        default:
            return state;
    }
}


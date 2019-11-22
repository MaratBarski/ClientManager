import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { DataService } from '../services/data.service';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

export const DATA_URL = 'http://localhost:54329/Home/GetData';

@Injectable()
export class DataEffects {

    constructor(
        private actions$: Actions,
        private dataService: DataService
    ) { }

    @Effect()
    getData = this.actions$.pipe(
        ofType('GET'),
        mergeMap(() => {
            return this.dataService.getData(DATA_URL).pipe(
                map(data => {
                    return {
                        type: 'GET_SUCC',
                        payload: data
                    };
                })
            );
        }
        )
    );
}

export function dataReducer(state: any = {}, act: { type: string, payload: any }): any {
    switch (act.type) {
        case ('GET_SUCC'):
            return { ...state, ...act.payload };
        default:
            return { ...state };
    }
}

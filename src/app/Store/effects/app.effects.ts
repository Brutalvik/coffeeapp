import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs';
import {
  fetchData,
  getErrorData,
  getSuccessData,
  isLoaded,
} from '../actions/app.actions';
import { FetchDataService } from '../services/app.service';
import { Store } from '@ngrx/store';
import { CoffeeDataInterface } from 'src/app/Models/app.model';

@Injectable()
export class StoreEffects {
  constructor(
    public actions$: Actions,
    private dataService: FetchDataService,
    private store: Store<{
      app: { isLoading: boolean; data: CoffeeDataInterface[] };
    }>
  ) {}

  loadApiData$ = createEffect(() => {
    this.store.dispatch(isLoaded({ status: true }));
    try {
      return this.actions$.pipe(
        ofType(fetchData),
        mergeMap(() => {
          return this.dataService.fetchApiData().pipe(
            map((data) => {
              this.store.dispatch(isLoaded({ status: false }));
              if (data) {
                return getSuccessData({ data });
              } else {
                getErrorData({
                  error: { status: 503, message: 'Service Unavailable' },
                });
              }
            })
          );
        })
      );
    } catch (err) {
      this.store.dispatch(
        getErrorData({
          error: { status: 500, message: 'Internal Server Error.' },
        })
      );
    }
  });
}

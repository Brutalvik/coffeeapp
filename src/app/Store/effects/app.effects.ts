import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs';
import { fetchData, getSuccessData } from '../actions/app.actions';
import { FetchDataService } from '../services/app.service';

@Injectable()
export class StoreEffects {
  constructor(
    public actions$: Actions,
    private dataService: FetchDataService
  ) {}

  loadApiData$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fetchData),
      mergeMap(() => {
        return this.dataService.fetchApiData().pipe(
          map((data) => {
            return getSuccessData({ data });
          })
        );
      })
    );
  });
}

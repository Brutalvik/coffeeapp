import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { loadApiData, loadApiDataSuccess } from '../Actions/store.actions';

@Injectable()
export class StoreEffects {
  constructor(public actions$: Actions, private dataService: DataService) {}

  loadData$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadApiData),
      mergeMap(() => {
        return this.dataService.getCoffeeData().pipe(
          map((data) => {
            return loadApiDataSuccess({ data });
          })
        );
      })
    );
  });
}

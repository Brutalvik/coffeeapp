import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { AppService } from 'src/app/shared/app.services';
import * as fromRoot from '../../Models/app.model';
import { getIsLoading } from 'src/app/Store/reducers/app.reducer';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  isLoading$: Observable<boolean>;

  constructor(private store: Store<fromRoot.AppStateInterface>) {}

  ngOnInit(): void {
    this.isLoading$ = this.store.select(getIsLoading);
  }
}

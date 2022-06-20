import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { fetchData } from 'src/app/Store/actions/app.actions';
import { getLoading } from 'src/app/Store/selector/app.selector';
import * as fromRoot from '../../Models/app.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  isLoading$: boolean;

  constructor(
    private store: Store<{
      app: { isLoading: boolean; data: fromRoot.CoffeeDataInterface[] };
    }>
  ) {}

  ngOnInit(): void {
    this.store.subscribe((data) => {
      this.isLoading$ = data.app.isLoading;
    });
    this.store.dispatch(fetchData());
  }
}

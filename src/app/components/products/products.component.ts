import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadApiData } from 'src/app/Store/Actions/store.actions';
import * as fromModel from '../../Models/app.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  constructor(private store: Store<{ ui: fromModel.LoadState }>) {}

  ngOnInit(): void {
    this.store.dispatch(loadApiData());
  }

  getCoffeeData() {
    this.store.dispatch({ type: 'START_LOADING' });
    this.store.dispatch({ type: 'STOP_LOADING' });
  }
}

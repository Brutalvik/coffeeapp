import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { fetchData } from 'src/app/Store/actions/app.actions';
import { CoffeeDataInterface } from '../../Models/app.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  isLoading$: boolean;
  data$: CoffeeDataInterface[];

  constructor(
    private store: Store<{
      app: { isLoading: boolean; data: CoffeeDataInterface[] };
    }>
  ) {}

  ngOnInit(): void {
    this.store.subscribe((data) => {
      this.isLoading$ = data.app.isLoading;
    });
    this.store.dispatch(fetchData());
    this.store.subscribe((data) => (this.data$ = data.app.data));
  }
}

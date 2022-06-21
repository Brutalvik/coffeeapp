import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { fetchData } from 'src/app/Store/actions/app.actions';
import { FetchDataService } from 'src/app/Store/services/app.service';
import {
  CoffeeDataInterface,
  ErrorDataInterface,
} from '../../Models/app.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  isLoading$: boolean;
  data$: CoffeeDataInterface[];
  error$: ErrorDataInterface;

  constructor(
    private store: Store<{
      app: {
        isLoading: boolean;
        data: CoffeeDataInterface[];
        error: ErrorDataInterface;
      };
    }>
  ) {}

  ngOnInit(): void {
    this.store.subscribe((data) => {
      this.isLoading$ = data.app.isLoading;
    });
    this.store.dispatch(fetchData());
    this.store.subscribe((data) => (this.data$ = data.app.data));
    this.store.subscribe((data) => (this.error$ = data.app.error));
  }
}

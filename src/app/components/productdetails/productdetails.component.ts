import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  CoffeeDataInterface,
  ErrorDataInterface,
} from 'src/app/Models/app.model';
import { isLoaded } from 'src/app/Store/actions/app.actions';
import { FetchDataService } from 'src/app/Store/services/app.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css'],
})
export class ProductdetailsComponent implements OnInit {
  error$: ErrorDataInterface = null;
  isLoading$: boolean = null;
  data$: CoffeeDataInterface[] = null;
  coffeeData$: CoffeeDataInterface = null;
  constructor(
    private store: Store<{
      app: {
        isLoading: boolean;
        error: ErrorDataInterface;
        coffee: CoffeeDataInterface;
        data: CoffeeDataInterface[];
      };
    }>,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.store.dispatch(isLoaded({ status: true }));
    this.store.subscribe((data) => (this.isLoading$ = data.app.isLoading));
    console.log('started...');
    let dataPersists: CoffeeDataInterface[] = JSON.parse(
      localStorage.getItem('data')
    );
    try {
      this.route.params.forEach((params: Params) => {
        Object.values(dataPersists).map((value) => {
          if (value.id === parseInt(params.id)) {
            this.coffeeData$ = value;
            console.log(value);
            this.store.dispatch(isLoaded({ status: false }));
          }
        });
      });
    } catch (err) {
      throw new err();
    }
  }

  redirectToHome() {
    this.store.dispatch(isLoaded({ status: true }));
    this.router.navigate(['/']);
    this.store.dispatch(isLoaded({ status: false }));
  }
}

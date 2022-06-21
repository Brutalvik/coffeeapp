import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  CoffeeDataInterface,
  ErrorDataInterface,
} from 'src/app/Models/app.model';
import { getSuccessData, isLoaded } from 'src/app/Store/actions/app.actions';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() data: CoffeeDataInterface[];

  p: number = 1;
  data$: CoffeeDataInterface[] = null;
  error$: ErrorDataInterface = null;
  imageArray: any;
  image: any;

  constructor(
    private store: Store<{
      app: {
        isLoading: boolean;
        data: CoffeeDataInterface[];
      };
    }>,
    private router: Router,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.store.subscribe((data) => (this.data$ = data.app.data));
  }

  sanitizeImageUrl(imageUrl: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
  }

  onPageChange(page: number) {
    this.p = page;
  }

  setCofeeDetails(id: number) {
    this.store.dispatch(isLoaded({ status: true }));
    this.router.navigate([`/productdetails`, id]);
    let dataPersists = localStorage.getItem('data');
    if (dataPersists) {
      this.store.dispatch(getSuccessData(JSON.parse(dataPersists)));
    } else {
      null;
    }
  }
}

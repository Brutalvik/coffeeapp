import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadState } from '../Models/app.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getCoffeeData(): Observable<LoadState['data']> {
    return this.http.get(
      `https://random-data-api.com/api/coffee/random_coffee?size=50`
    );
  }
}

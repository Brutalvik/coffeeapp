import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FetchDataService {
  constructor(private http: HttpClient) {}

  //Service
  fetchApiData() {
    return this.http.get(
      'https://random-data-api.com/api/coffee/random_coffee?size=50'
    );
  }
}

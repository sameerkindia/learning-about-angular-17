import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JokeService {
  constructor(private http: HttpClient) {}

  getJoke() {
    return this.http.get('https://api.chucknorris.io/jokes/random');
  }

  users() {
    return [
      { name: 'sameer khan', age: 24 },
      { name: 'sahil khan', age: 26 },
      { name: 'aamin khan', age: 22 },
      { name: 'afroj khan', age: 20 },
    ];
  }
}

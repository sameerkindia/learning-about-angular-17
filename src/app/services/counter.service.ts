import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  private count = 0;
  constructor() {}

  getCount() {
    return this.count;
  }

  incCount() {
    this.count += 1;
  }
  decCount() {
    this.count -= 1;
  }
}

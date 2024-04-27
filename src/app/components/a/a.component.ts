import { Component } from '@angular/core';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-a',
  standalone: true,
  imports: [],
  templateUrl: './a.component.html',
  styleUrl: './a.component.css',
})
export class AComponent {
  count: any;
  constructor(public countService: CounterService) {}

  /*
  ngOnInit() {
    this.getCount();
  }

  ngOnChange() {
    this.getCount();
  }

  incCount() {
    this.countService.incCount();
    this.getCount();
  }

  decCount() {
    this.countService.decCount();
    this.getCount();
  }

  getCount() {
    this.count = this.countService.getCount();
  } */
}

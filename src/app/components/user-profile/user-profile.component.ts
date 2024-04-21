import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  booleanAttribute,
  numberAttribute,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

function uppercase(name: String) {
  return name.toUpperCase();
}
@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css',
})
export class UserProfileComponent {
  @Input({ alias: 'username', transform: uppercase }) name = '';
  @Input({ transform: numberAttribute }) age!: Number;
  @Input({ transform: booleanAttribute }) isTrue!: Boolean;
  // name = 'sameer khan';
  // age = 24;
  // salary = 40000;
  // isBtnDisabled = true;

  // users = [
  //   { name: 'sameer khan', age: 24 },
  //   { name: 'sahli', age: 26 },
  //   { name: 'aamin', age: 22 },
  // ];

  // onChange(e: any) {
  //   this.name = e.target.value;
  //   // console.log(e.target.value);
  //   // console.log('hello');
  // }
}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css',
})
export class UserProfileComponent {
  name = 'sameer khan';
  age = 24;
  salary = 40000;
  isBtnDisabled = true;

  // onChange(e: any) {
  //   this.name = e.target.value;
  //   // console.log(e.target.value);
  //   // console.log('hello');
  // }
}

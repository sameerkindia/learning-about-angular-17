import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { CommonModule } from '@angular/common';
// import { User } from '../models/User';
import { JokeComponent } from './components/joke/joke.component';
import { JokeService } from './services/joke.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserProfileComponent, CommonModule, JokeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  data = 'output';
  name = 'Sameer Khan';
  salary = 40000;

  newData: any;
  constructor(private userdata: JokeService) {
    // console.log(userdata.users());
    this.newData = userdata.users();
  }

  updateData(data: string) {
    this.data = data;
  }

  recevedData(event: string) {
    this.name = event;
  }
}

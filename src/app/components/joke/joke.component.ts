import { Component } from '@angular/core';
import { JokeService } from '../../services/joke.service';

@Component({
  selector: 'app-joke',
  standalone: true,
  imports: [],
  templateUrl: './joke.component.html',
  styleUrl: './joke.component.css',
})
export class JokeComponent {
  joke = 'loading';

  constructor(private jokeService: JokeService) {}

  ngOnInit() {
    this.getAnotherJoke();
  }

  getAnotherJoke() {
    this.joke = 'loading';

    this.jokeService.getJoke().subscribe((data: any) => {
      this.joke = data.value;
    });
  }
}

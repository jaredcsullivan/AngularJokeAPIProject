import { Component, OnInit } from '@angular/core';
import { Joke } from './joke';
import { JokeService } from './joke.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'joke-api-app';
  selectedJoke: Joke;
  jokes: Joke[];

  constructor(private jokeService: JokeService) { }

  ngOnInit() {
    this.getJokes();
  }

  getJokes(): void {
    this.jokeService.getJokes()
    .subscribe(jokes => this.jokes = jokes);
  }

  getNewJokes() {
    this.getJokes();
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';
import { Joke } from './joke';

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  private jokesUrl = 'https://official-joke-api.appspot.com/jokes/ten';

  /** Log a JokeService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`JokeService: ${message}`);
  }

  getJokes(): Observable<Joke[]> {
    this.log('GETTING JOKES FROM ' + this.jokesUrl);
    return this.http.get<Joke[]>(this.jokesUrl);
  }
}

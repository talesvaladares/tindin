import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from "@angular/common/http";
import { Game, GameResponse } from '../Game';

const api = environment.api;

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(
    private http: HttpClient
  ) { }

  get games(){
    return this.http.get<GameResponse>(`${api}/games`);
  }
}

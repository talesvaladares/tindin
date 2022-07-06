import {Component, OnInit} from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Game } from './Game';
import {GamesService} from './services/games.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  games: Game[] = [];
  semImagem = 'assets/images/sem-foto.jpg';
  loaderImage = 'assets/images/pacman.svg';

  cover: string[] = [];
  indexCover = 0;
  isLoading = false;

  constructor(
    private gamesService: GamesService
  ){

  }

  ngOnInit(): void {
    this.loadData();
  }

  async loadData(){

    this.isLoading = true;

    const response = await lastValueFrom(this.gamesService.games);

    this.games = [...response.games];

    const images = this.games.map(item => {
      if(item.photos.length > 0){
        return item.photos[0].url
      }
      else{
        return ''
      }
    });

    this.cover = this.shuffle(images.filter(item => item !== ''));

    this.isLoading = false;

  }

  shuffle(array: string[]){
    return array.sort(() => Math.random() - 0.5);
  }

  nextImage(){

    if(this.indexCover === 2){
      this.indexCover = 0;
    }
    else{
      this.indexCover += 1;
    }

  }

  previousImage(){
    if(this.indexCover === 0){
      this.indexCover = 2;
    }
    else{
      this.indexCover -= 1;
    }
  }

}

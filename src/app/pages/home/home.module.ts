import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from './home.component';
import {HomeRoutingModule} from './home-routing.module';
import {CardGameComponent} from './components/card-game/card-game.component';
import {GamesService} from './services/games.service';
import {CoreModule} from 'src/app/core/core.module'


@NgModule({
  declarations: [
    HomeComponent,
    CardGameComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CoreModule,
  ],
  providers: [
    GamesService
  ]
})
export class HomeModule { }

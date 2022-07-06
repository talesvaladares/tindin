import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: "card-game",
  templateUrl: './card-game.component.html',
  styleUrls: ['./card-game.component.scss']
})
export class CardGameComponent implements OnInit {

  @Input()
  image: string = '';

  @Input()
  price: number = 0;

  @Input()
  rate: number = 0;

  @Input()
  title: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}

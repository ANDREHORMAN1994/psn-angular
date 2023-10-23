import { Component, OnInit } from '@angular/core';
import { IGame } from 'src/app/model/game';
import { gamesList } from 'src/app/utils/data';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  games: IGame[] = [];

  ngOnInit(): void {
    this.games = gamesList;
  }

}

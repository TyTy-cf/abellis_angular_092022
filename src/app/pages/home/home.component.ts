import {Component, OnInit} from '@angular/core';
import {HttpGameService} from "../../../services/repository/http-game.service";
import {Game} from "../../../models/fake-steam/game";
import {forkJoin} from "rxjs";
import {IApiResponse} from "../../../models/fake-steam/interface/i-api-response";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  lastPublishedGames: Game[] = [];
  pricesGames: Game[] = [];
  alphaGames: Game[] = [];

  constructor(private gameRepository: HttpGameService) {
  }

  ngOnInit(): void {
    forkJoin<Array<IApiResponse<Game>>>([
      this.gameRepository.findAll(1, 6, 'sort=game.name&direction=ASC'),
      this.gameRepository.findAll(1, 6, 'sort=game.price&direction=DESC'),
      this.gameRepository.findAll(1, 6, 'sort=game.publishedAt&direction=DESC')
    ])
    .subscribe(([gameName, gamePrice, gamePublishedAt]) => {
      this.alphaGames = gameName.items;
      this.pricesGames = gamePrice.items;
      this.lastPublishedGames = gamePublishedAt.items;
    });
  }

}

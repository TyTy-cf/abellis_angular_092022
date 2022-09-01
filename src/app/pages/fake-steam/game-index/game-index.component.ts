import { Component, OnInit } from '@angular/core';
import {HttpGameService} from "../../../../services/http-game.service";
import {IApiResponse} from "../../../../models/fake-steam/i-api-response";
import {Game} from "../../../../models/fake-steam/game";

@Component({
  selector: 'app-game-index',
  templateUrl: './game-index.component.html',
  styleUrls: ['./game-index.component.scss']
})
export class GameIndexComponent implements OnInit {

  apiResponse: IApiResponse<Game> | undefined;

  constructor(private httpClientService: HttpGameService) { }

  ngOnInit(): void {
    this.httpClientService.findAll().subscribe((json) => {
      this.apiResponse = json;
    });
  }

}

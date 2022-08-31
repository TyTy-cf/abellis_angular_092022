import { Component, OnInit } from '@angular/core';
import {HttpGameService} from "../../../../services/http-game.service";

@Component({
  selector: 'app-game-index',
  templateUrl: './game-index.component.html',
  styleUrls: ['./game-index.component.scss']
})
export class GameIndexComponent implements OnInit {

  constructor(private gameRepository: HttpGameService) { }

  ngOnInit(): void {
    this.gameRepository.getEntities().subscribe((json) => {
      console.log(json.items);
    });
  }

}

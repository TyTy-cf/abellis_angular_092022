import {Component, Input, OnInit} from '@angular/core';
import {Game} from "../../../models/fake-steam/game";
import {TimeConverterService} from "../../../services/time-converter.service";

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent implements OnInit {

  @Input()
  game: Game | undefined;

  @Input()
  timePlayed: number | undefined;

  displayedValue: string = '';

  constructor(private timeConverter: TimeConverterService) { }

  ngOnInit(): void {
    if (this.timePlayed) {
      this.displayedValue = this.timeConverter.convertTimeToString(this.timePlayed);
    } else {
      this.displayedValue = this.game?.price + '€';
    }
  }

}

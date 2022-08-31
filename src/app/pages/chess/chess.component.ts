import {Component, OnInit} from '@angular/core';
import {ChessBoard} from "../../../models/chess/chess-board";
import {ActivatedRoute} from "@angular/router";
import {HttpClientService} from "../../../services/http-client.service";

@Component({
  selector: 'app-chess',
  templateUrl: './chess.component.html',
  styleUrls: ['./chess.component.scss']
})
export class ChessComponent implements OnInit {

  chessBoard: ChessBoard = new ChessBoard();
  valueParam: string|undefined;

  constructor(private activatedRoute: ActivatedRoute, private httpService: HttpClientService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      this.valueParam = param['color'];
    });
  }

}

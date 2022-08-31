import { Component } from '@angular/core';
import {ChessBoard} from "../../../models/chess/chess-board";

@Component({
  selector: 'app-chess',
  templateUrl: './chess.component.html',
  styleUrls: ['./chess.component.scss']
})
export class ChessComponent {

  chessBoard: ChessBoard = new ChessBoard();

}

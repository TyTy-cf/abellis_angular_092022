
import {Piece} from "./piece";
import {Case} from "./case";

export class Rook extends Piece {

  constructor(color: string) {
    super(color, '/assets/images/chess/rook-' + color + '.png');
  }

  move(initialCase: Case, board: Case[]): Case[] {
    return [];
  }

}

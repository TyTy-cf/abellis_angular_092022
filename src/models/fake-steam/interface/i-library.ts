import {Game} from "../game";

export interface ILibrary {

  id: number;
  installed: boolean;
  gameTime: number;
  lastUsedAt: Date;
  createdAt: Date;
  game: Game;

}


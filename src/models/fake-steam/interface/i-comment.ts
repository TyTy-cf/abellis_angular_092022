import {Game} from "../game";

export interface IComment {

  id: number;
  createdAt: Date;
  content: string;
  upVotes: number;
  downVotes: number;
  rank: number;
  game: Game;

}

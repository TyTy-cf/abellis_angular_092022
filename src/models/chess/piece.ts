import {Case} from "./case";

export abstract class Piece {

  // private _color: string;
  // private _image: string;
  //
  // protected constructor(
  //   color: string,
  //   image: string
  // ) {
  //   this._image = image;
  //   this._color = color;
  // }

  protected constructor(
    private _color: string,
    private _image: string
  ) { }

  get image(): string {
    return this._image;
  }

  set image(value: string) {
    this._image = value;
  }

  get color(): string {
    return this._color;
  }

  set color(value: string) {
    this._color = value;
  }

  abstract move(initialCase: Case, board: Case[]): Case[];

}

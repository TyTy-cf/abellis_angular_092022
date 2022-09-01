import {ICountry} from "./interface/i-country";
import {ILibrary} from "./interface/i-library";
import {IComment} from "./interface/i-comment";

export class Account {

  private _id: number = 0;
  private _name: string = '';
  private _email: string = '';
  private _nickname: string = '';
  private _wallet: number = 0;
  private _slug: string = '';
  private _createdAt: Date = new Date();
  private _librariesCount: number = 0;
  private _country: ICountry|undefined;
  private _comments: IComment[] = [];
  private _libraries: ILibrary[] = [];
  private _totalPlayedTime: number = 0;

  get totalPlayedTime(): number {
    return this._totalPlayedTime;
  }

  set totalPlayedTime(value: number) {
    this._totalPlayedTime = value;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get nickname(): string {
    return this._nickname;
  }

  set nickname(value: string) {
    this._nickname = value;
  }

  get wallet(): number {
    return this._wallet;
  }

  set wallet(value: number) {
    this._wallet = value;
  }

  get slug(): string {
    return this._slug;
  }

  set slug(value: string) {
    this._slug = value;
  }

  get createdAt(): Date {
    return this._createdAt;
  }

  set createdAt(value: Date) {
    this._createdAt = value;
  }

  get librariesCount(): number {
    return this._librariesCount;
  }

  set librariesCount(value: number) {
    this._librariesCount = value;
  }

  get country(): ICountry | undefined {
    return this._country;
  }

  set country(value: ICountry | undefined) {
    this._country = value;
  }

  get comments(): IComment[] {
    return this._comments;
  }

  set comments(value: IComment[]) {
    this._comments = value;
  }

  get libraries(): ILibrary[] {
    return this._libraries;
  }

  set libraries(value: ILibrary[]) {
    this._libraries = value;
  }
}

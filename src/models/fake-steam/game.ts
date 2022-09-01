
export class Game {

  protected _id: number = 0;
  protected _price: number = 0;
  protected _name: string = '';
  protected _description: string = '';
  protected _thumbnailCover: string = '';
  protected _thumbnailLogo: string = '';
  protected _slug: string = '';
  protected _publishedAt: Date = new Date();

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get thumbnailCover(): string {
    return this._thumbnailCover;
  }

  set thumbnailCover(value: string) {
    this._thumbnailCover = value;
  }

  get thumbnailLogo(): string {
    return this._thumbnailLogo;
  }

  set thumbnailLogo(value: string) {
    this._thumbnailLogo = value;
  }

  get slug(): string {
    return this._slug;
  }

  set slug(value: string) {
    this._slug = value;
  }

  get publishedAt(): Date {
    return this._publishedAt;
  }

  set publishedAt(value: Date) {
    this._publishedAt = value;
  }
}

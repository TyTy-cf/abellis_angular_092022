import {ICountry} from "./interface/i-country";

export class FormItemPublisher {

  private _name: string = '';
  private _webSite: string = '';
  private _country: ICountry | undefined;

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get webSite(): string {
    return this._webSite;
  }

  set webSite(value: string) {
    this._webSite = value;
  }

  get country(): ICountry | undefined {
    return this._country;
  }

  set country(value: ICountry | undefined) {
    this._country = value;
  }
}

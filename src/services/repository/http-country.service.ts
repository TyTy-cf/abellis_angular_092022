import {Inject, Injectable} from '@angular/core';
import {HttpClientService} from "../http-client.service";
import {ICountry} from "../../models/fake-steam/interface/i-country";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpCountryService extends HttpClientService<ICountry>{

  constructor(httpClient: HttpClient, @Inject('rawApiUrl') rawApiUrl: string) {
    super(httpClient, rawApiUrl, 'country');
  }

}

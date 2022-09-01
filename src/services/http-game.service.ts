import {Inject, Injectable} from '@angular/core';
import {HttpClientService} from "./http-client.service";
import {Game} from "../models/fake-steam/game";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpGameService extends HttpClientService<Game> {

  constructor(httpClient: HttpClient, @Inject('rawApiUrl') rawApiUrl: string) {
    super(httpClient, rawApiUrl, 'game');
  }

}

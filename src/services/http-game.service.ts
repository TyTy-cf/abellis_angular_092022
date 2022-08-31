import {Inject, Injectable} from '@angular/core';
import {Game} from "../models/fake-steam/game";
import {HttpClient} from "@angular/common/http";
import {HttpClientService} from "./http-client.service";

@Injectable({
  providedIn: 'root'
})
export class HttpGameService extends HttpClientService<Game>{

  constructor(httpClient: HttpClient, @Inject('rawApiUrl') rawUrl: string) {
    super(httpClient, rawUrl, 'game');
  }

}

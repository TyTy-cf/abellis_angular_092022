import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IApiResponse} from "../models/fake-steam/i-api-response";
import {Game} from "../models/fake-steam/game";

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient: HttpClient) { }

  getRequest(): Observable<IApiResponse<Game>> {
    return this.httpClient.get<IApiResponse<Game>>('https://steam-ish.test-02.drosalys.net/api/game?page=1&limit=9');
  }

}

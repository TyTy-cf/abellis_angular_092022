import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {IApiResponse} from "../models/fake-steam/interface/i-api-response";
import {sprintf} from "sprintf-js";

export abstract class HttpClientService<T> {

  protected jsonHeaders: {headers: HttpHeaders} = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      //'Authorization': 'bearer '
    })
  };

  protected constructor(
    protected httpClient: HttpClient,
    protected rawApiUrl: string,
    protected model: string
  ) { }

  findAll(page: number = 1, limit: number = 9): Observable<IApiResponse<T>> {
    return this.httpClient.get<IApiResponse<T>>(sprintf('%s%s?page=%s&limit=%s', this.rawApiUrl, this.model, page, limit));
  }

  findOneBy(slug: string): Observable<T> {
    return this.httpClient.get<T>(sprintf('%s%s/%s', this.rawApiUrl, this.model, slug));
  }

}

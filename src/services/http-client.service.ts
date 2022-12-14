import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {IApiResponse} from "../models/fake-steam/interface/i-api-response";
import {sprintf} from "sprintf-js";
import {IPostItem} from "../models/fake-steam/interface/i-post-item";
import {IPutItem} from "../models/fake-steam/interface/i-put-item";

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

  findAll(page: number = 1, limit: number = 9, filter: string = ''): Observable<IApiResponse<T>> {
    return this.httpClient.get<IApiResponse<T>>(sprintf('%s%s?page=%s&limit=%s&%s', this.rawApiUrl, this.model, page, limit, filter));
  }

  findOneBy(slug: string): Observable<T> {
    return this.httpClient.get<T>(sprintf('%s%s/%s', this.rawApiUrl, this.model, slug));
  }

  persistFlush(body: IPostItem): Observable<T> {
    return this.httpClient.post<T>(sprintf('%s%s', this.rawApiUrl, this.model), body.getPostItem(), this.jsonHeaders);
  }

  update(body: IPutItem, id: number): Observable<T> {
    return this.httpClient.put<T>(sprintf('%s%s/%s', this.rawApiUrl, this.model, id), body.getPutItem(), this.jsonHeaders);
  }

}

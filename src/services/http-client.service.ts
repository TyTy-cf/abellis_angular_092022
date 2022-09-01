import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IApiResponse} from "../models/fake-steam/i-api-response";

export abstract class HttpClientService<T> {

  protected constructor(
    protected httpClient: HttpClient,
    protected rawApiUrl: string,
    protected model: string
  ) { }

  findAll(page: number = 1, limit: number = 9): Observable<IApiResponse<T>> {
    return this.httpClient.get<IApiResponse<T>>(this.rawApiUrl + this.model + '?page=' + page + '&limit=' + limit);
  }

  findOneBy(slug: string): Observable<any> {
    return this.httpClient.get(this.rawApiUrl);
  }

}

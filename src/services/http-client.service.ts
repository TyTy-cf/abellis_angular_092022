import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IApiResponse} from "../models/fake-steam/i-api-response";

export abstract class HttpClientService<T> {

  protected constructor(
    protected httpClient: HttpClient,
    protected rawUrl: string,
    protected model: string
  ) { }

  getEntities(page: number = 1, limit: number = 9): Observable<IApiResponse<T>> {
    return this.httpClient.get<IApiResponse<T>>(this.rawUrl + this.model + '?page='+ page +'&limit=' + limit);
  }

}

import {Inject, Injectable} from '@angular/core';
import {HttpClientService} from "../http-client.service";
import {Account} from "../../models/fake-steam/account";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpAccountService extends HttpClientService<Account> {

  constructor(httpClient: HttpClient, @Inject('rawApiUrl') rawApiUrl: string) {
    super(httpClient, rawApiUrl, 'account');
  }

}

import { Component, OnInit } from '@angular/core';
import {HttpAccountService} from "../../../../services/repository/http-account.service";
import {IApiResponse} from "../../../../models/fake-steam/interface/i-api-response";
import {Account} from "../../../../models/fake-steam/account";

@Component({
  selector: 'app-account-index',
  templateUrl: './account-index.component.html',
  styleUrls: ['./account-index.component.scss']
})
export class AccountIndexComponent implements OnInit {

  apiResponse: IApiResponse<Account> | undefined;

  constructor(private httpAccount: HttpAccountService) { }

  ngOnInit(): void {
    this.updateDatas(1);
  }

  updateDatas(page: number): void {
    this.httpAccount.findAll(page, 15, 'sort=account.name&direction=ASC').subscribe((json) => {
      this.apiResponse = json;
    });
  }
}

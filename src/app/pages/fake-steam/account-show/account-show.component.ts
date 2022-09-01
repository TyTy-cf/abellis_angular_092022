import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpAccountService} from "../../../../services/repository/http-account.service";
import {Account} from "../../../../models/fake-steam/account";
import {TimeConverterService} from "../../../../services/time-converter.service";

@Component({
  selector: 'app-account-show',
  templateUrl: './account-show.component.html',
  styleUrls: ['./account-show.component.scss']
})
export class AccountShowComponent implements OnInit {

  account: Account | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpAccount: HttpAccountService,
    public timeConverter: TimeConverterService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const slugParam: string = params['slug'];
      if (slugParam) {
        this.httpAccount.findOneBy(slugParam).subscribe((jsonAccount) => {
          this.account = jsonAccount;
        });
      }
    });
  }

}

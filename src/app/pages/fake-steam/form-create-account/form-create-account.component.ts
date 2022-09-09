import { Component } from '@angular/core';
import {Account} from "../../../../models/fake-steam/account";
import {HttpAccountService} from "../../../../services/repository/http-account.service";
import {catchError, throwError} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-form-create-account',
  templateUrl: './form-create-account.component.html',
  styleUrls: ['./form-create-account.component.scss']
})
export class FormCreateAccountComponent {

  account: Account = new Account();
  apiErrors: string = '';

  constructor(
    private accountRepository: HttpAccountService,
    private router: Router
  ) {
  }

  onSubmit(): void {
    this.accountRepository.persistFlush(this.account)
    .pipe(
      catchError(err => {
        this.apiErrors = err.error.detail;
        return throwError(err);
      })
    )
    .subscribe((jsonAccount) => {
      this.router.navigateByUrl('/account/' + jsonAccount.slug).then(r => console.log(r) );
    });
  }
}

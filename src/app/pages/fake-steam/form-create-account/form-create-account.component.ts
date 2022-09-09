import { Component } from '@angular/core';
import {Account} from "../../../../models/fake-steam/account";

@Component({
  selector: 'app-form-create-account',
  templateUrl: './form-create-account.component.html',
  styleUrls: ['./form-create-account.component.scss']
})
export class FormCreateAccountComponent {

  account: Account = new Account();

  onSubmit(): void {
    console.log(this.account);
  }
}

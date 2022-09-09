import { Component, OnInit } from '@angular/core';
import {Account} from "../../../../models/fake-steam/account";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form-update-account',
  templateUrl: './form-update-account.component.html',
  styleUrls: ['./form-update-account.component.scss']
})
export class FormUpdateAccountComponent implements OnInit {

  account: Account = new Account();
  formGroupAccount!: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.formGroupAccount = new FormGroup({
      nickname: new FormControl(
        this.account.nickname, [
          Validators.required,
          Validators.minLength(4)
        ]
      )
    });
  }

  get nickname(): AbstractControl {
    return <AbstractControl> this.formGroupAccount.get('nickname');
  }

  getFields(field: string): AbstractControl {
    return <AbstractControl> this.formGroupAccount.get(field);
  }

  isFieldOnErrors(field: string): boolean {
    const formControl: AbstractControl = this.getFields(field);
    return (formControl.touched || formControl.dirty) && formControl.invalid;
  }

  onSubmit(): void {
    if (this.formGroupAccount.valid) {

    } else {
      console.log("Arrête d'essayer de trafiquer le form !!!!");
    }
  }
}

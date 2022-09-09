import { Component, OnInit } from '@angular/core';
import {Account} from "../../../../models/fake-steam/account";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpCountryService} from "../../../../services/repository/http-country.service";
import {ICountry} from "../../../../models/fake-steam/interface/i-country";

@Component({
  selector: 'app-form-update-account',
  templateUrl: './form-update-account.component.html',
  styleUrls: ['./form-update-account.component.scss']
})
export class FormUpdateAccountComponent implements OnInit {

  account: Account = new Account();
  formGroupAccount!: FormGroup;
  countries: ICountry[] = [];

  constructor(
    private countryRepository: HttpCountryService
  ) {
  }

  ngOnInit(): void {
    this.initForm();
    this.countryRepository.findAll(1, 12).subscribe((json) => {
      this.countries = json.items;
    });
  }

  initForm(): void {
    this.formGroupAccount = new FormGroup({
      nickname: new FormControl(
        this.account.nickname, [
          Validators.required,
          Validators.minLength(4)
        ]
      ),
      country: new FormControl(
        this.account.country
      )
    });
  }

  get nickname(): AbstractControl {
    return <AbstractControl> this.formGroupAccount.get('nickname');
  }

  get country(): AbstractControl {
    return <AbstractControl> this.formGroupAccount.get('country');
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
      this.account.country = this.country.value;
      this.account.nickname = this.nickname.value;
      // this.account = this.formGroupAccount.value;
    } else {
      console.log("Arrête d'essayer de trafiquer le form !!!!");
    }
  }
}
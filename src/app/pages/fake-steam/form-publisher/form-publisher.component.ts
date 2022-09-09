import { Component, OnInit } from '@angular/core';
import {FormItemPublisher} from "../../../../models/fake-steam/form-item-publisher";
import {HttpCountryService} from "../../../../services/repository/http-country.service";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {ICountry} from "../../../../models/fake-steam/interface/i-country";

@Component({
  selector: 'app-form-publisher',
  templateUrl: './form-publisher.component.html',
  styleUrls: ['./form-publisher.component.scss']
})
export class FormPublisherComponent implements OnInit {

  publisher: FormItemPublisher = new FormItemPublisher();
  formGroupPublisher!: FormGroup;
  countries: ICountry[] = [];

  constructor(
    private countryRepository: HttpCountryService
  ) { }

  ngOnInit(): void {
    this.formGroupPublisher = new FormGroup({
      name: new FormControl(
        this.publisher.name, [
          Validators.required
        ],
      ),
      website: new FormControl(
        this.publisher.webSite, [
          Validators.required
        ],
      ),
      country: new FormControl(
        this.publisher.country
      ),
    });
    this.countryRepository.findAll(1, 15).subscribe((json) => {
      this.countries = json.items;
    });
  }

  getCssClassForField(field: string): string {
    const formControl: AbstractControl = this.getFields(field);
    if (this.isFieldOnErrors(field)) return 'is-invalid';
    if (formControl.valid) return 'is-valid';
    return '';
  }

  getFields(field: string): AbstractControl {
    return <AbstractControl> this.formGroupPublisher.get(field);
  }

  isFieldOnErrors(field: string): boolean {
    const formControl: AbstractControl = this.getFields(field);
    return (formControl.touched || formControl.dirty) && formControl.invalid;
  }

  onSubmit(): void {
    // vérifier unicité des données éventuelles, ici !
    if (this.formGroupPublisher.valid) {
      console.log(this.formGroupPublisher.value);
    }
  }

}

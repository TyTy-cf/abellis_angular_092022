import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  title: string = 'Abellis Formation Angular';
  displayOn: boolean = true;
  students: string[] = [
    'Toto',
    'Albert',
    'Jean'
  ];

  getSubtitle(): string {
    return 'A subtitle';
  }
}

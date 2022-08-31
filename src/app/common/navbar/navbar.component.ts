import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  navbarLinks: Array<{path: string, label: string}> = [
    { path: 'counter', label: 'Compteur' },
    { path: 'chess/white', label: "Jeu d'échec (Blanc)" },
    { path: 'chess/black', label: "Jeu d'échec (Noir)" },
  ];

}

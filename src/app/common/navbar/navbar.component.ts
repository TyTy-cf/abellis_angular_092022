import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  searchValue: string = '';

  navbarLinks: Array<{path: string, label: string}> = [
    { path: 'counter', label: 'Compteur' },
    { path: 'chess', label: "Jeu d'échec" },
    { path: 'games', label: "Les jeux" },
    { path: 'account', label: "Les comptes" },
    { path: 'account/register', label: "Inscription" },
    { path: 'publisher/new', label: "Ajouter éditeur" },
  ];

  sendSearch(): void {
    console.log(this.searchValue);
  }
}

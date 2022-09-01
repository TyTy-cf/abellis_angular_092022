import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CounterComponent} from "./pages/counter/counter.component";
import {HomeComponent} from "./pages/home/home.component";
import {ChessComponent} from "./pages/chess/chess.component";
import {GameIndexComponent} from "./pages/fake-steam/game-index/game-index.component";
import {AccountIndexComponent} from "./pages/fake-steam/account-index/account-index.component";
import {AccountShowComponent} from "./pages/fake-steam/account-show/account-show.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'counter', component: CounterComponent },
  { path: 'chess', component: ChessComponent },
  { path: 'games', component: GameIndexComponent },
  { path: 'games/:slug', component: GameIndexComponent },
  { path: 'account', component: AccountIndexComponent },
  { path: 'account/:slug', component: AccountShowComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

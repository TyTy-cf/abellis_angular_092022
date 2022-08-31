import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './pages/counter/counter.component';
import { ChessComponent } from './pages/chess/chess.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import {HttpClientModule} from "@angular/common/http";
import { GameIndexComponent } from './pages/fake-steam/game-index/game-index.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    ChessComponent,
    NavbarComponent,
    HomeComponent,
    GameIndexComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: 'rawApiUrl',
      useValue: 'https://steam-ish.test-02.drosalys.net/api/',
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

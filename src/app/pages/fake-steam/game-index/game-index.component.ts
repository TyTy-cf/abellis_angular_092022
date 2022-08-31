import { Component, OnInit } from '@angular/core';
import {HttpClientService} from "../../../../services/http-client.service";

@Component({
  selector: 'app-game-index',
  templateUrl: './game-index.component.html',
  styleUrls: ['./game-index.component.scss']
})
export class GameIndexComponent implements OnInit {

  constructor(private httpClientService: HttpClientService) { }

  ngOnInit(): void {
    this.httpClientService.getRequest().subscribe((json) => {
      console.log(json.items);
    });
  }

}

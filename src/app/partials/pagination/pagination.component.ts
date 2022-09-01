import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {

  @Input()
  currentPage: number | undefined;

  @Input()
  totalPages: number | undefined;

  @Output()
  eventPage: EventEmitter<number> = new EventEmitter<number>();

}

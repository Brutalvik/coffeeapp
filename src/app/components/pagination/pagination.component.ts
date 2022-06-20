import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit {
  @Output() pageNumEvent = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  changePage(value) {
    this.pageNumEvent.emit(value);
  }
}

import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit {
  length = 50;
  pageSize: 10;
  pageSizeOptions = [5, 10];
  constructor() {}

  ngOnInit(): void {}

  pageEvent: PageEvent;
}

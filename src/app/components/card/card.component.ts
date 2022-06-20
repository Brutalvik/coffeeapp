import { Component, OnInit, Input } from '@angular/core';
import { CoffeeDataInterface } from 'src/app/Models/app.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() data: CoffeeDataInterface[];
  p: number = 1;
  constructor() {}

  ngOnInit(): void {}

  onPageChange(page: number) {
    this.p = page;
  }
}

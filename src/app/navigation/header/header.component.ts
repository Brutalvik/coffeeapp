import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() sideNavEvent = new EventEmitter<void>();

  navItem$ = 'Details';
  constructor() {}

  ngOnInit(): void {}

  onToggleSideNav() {
    this.sideNavEvent.emit();
  }
}

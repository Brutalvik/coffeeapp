import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackmessageComponent } from './snackmessage.component';

describe('SnackmessageComponent', () => {
  let component: SnackmessageComponent;
  let fixture: ComponentFixture<SnackmessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnackmessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

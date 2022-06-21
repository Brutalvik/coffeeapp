import { Component, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackmessageComponent } from '../snackmessage/snackmessage.component';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css'],
})
export class SnackbarComponent {
  durationInSeconds: number = 3;
  @Input() navItem: string;

  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar() {
    this._snackBar.openFromComponent(SnackmessageComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }
}

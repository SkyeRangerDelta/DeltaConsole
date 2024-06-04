import { Component } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DeltaConsole';

  constructor(
    private _snackBar: MatSnackBar
  ) {}

  snacktime() {
    console.log('snacktime');
    this._snackBar.open('Snacktime', 'Right then.');
  }
}

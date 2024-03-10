import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'DeltaConsole';
  clickLimit = Math.floor(Math.random() * 10);
  clicks = 0;

  ngOnInit() {
    console.log('Click limit this time is ' + this.clickLimit);
  }

  increaseClicks(e: MouseEvent) {
    this.clicks++;
  }
}

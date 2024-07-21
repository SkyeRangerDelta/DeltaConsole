import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, HeaderComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'delta-console';
  bgImage = this.generateBgPath();

  ngOnInit() {
    // Set the background image
    this.setBGImage();
  }

  /**
   * Scans all possible images in the backgrounds directory and randomly returns the path to one.
   * @private
   */
  private generateBgPath(): string {
    const bgPath = './assets/images/backgrounds/';
    const bgs = [
      'ash-edmonds-blue-abstract.jpg',
      'pawel-czerwinski-glass-geo-unsplash.jpg',
      'pawel-czerwinski-glass-but-different-unsplash.jpg',
      'visax-abstract-blue-waves-unsplash.jpg',
      'skye-glass-1.png'
    ];

    // Return a random image path
    return bgPath + bgs[Math.floor(Math.random() * bgs.length)];
  }

  /**
   * Sets the background image of the app.
   * @private
   */
  private setBGImage() {
    document.body.style.backgroundImage = `url('${ this.bgImage }')`;
  }
}

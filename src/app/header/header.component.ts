import { Component } from '@angular/core';
import { NgForOf, NgOptimizedImage } from "@angular/common";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgForOf,
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  tabs = [
    {
      title: 'Home',
      route: '/home'
    },
    {
      title: 'Media',
      route: '/media'
    }
  ]
}

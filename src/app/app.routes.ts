import { Routes } from '@angular/router';
import { MediaModuleComponent } from "./media-module/media-module.component";
import { LandingModuleComponent } from "./landing-module/landing-module.component";

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: LandingModuleComponent },
  { path: 'media', component: MediaModuleComponent }
];

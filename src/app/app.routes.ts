import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PricingTableComponent } from './pricing/pricing.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pricing', component: PricingTableComponent },
  // Redirect any unknown paths to home
  { path: '**', redirectTo: '' }
];

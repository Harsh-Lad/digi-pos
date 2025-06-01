import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PricingTableComponent } from './pricing/pricing.component';
import { ProductsComponent } from './products/products.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pricing', component: PricingTableComponent },
  { path: 'products/:slug', component: ProductsComponent },
  // Redirect any unknown paths to home
  { path: '**', redirectTo: '' }
];

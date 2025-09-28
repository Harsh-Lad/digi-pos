import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PricingTableComponent } from './pricing/pricing.component';
import { ProductsComponent } from './products/products.component';
import { BusinessComponent } from './business/business.component';
import { DemoComponent } from './demo/demo.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pricing', component: PricingTableComponent },
  { path: 'products/:slug', component: ProductsComponent },
  { path: 'business/:slug', component: BusinessComponent },
  { path: 'demo', component: DemoComponent},
  // Redirect any unknown paths to home
  { path: '**', redirectTo: '' }
];

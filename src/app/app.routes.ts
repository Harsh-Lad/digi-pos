import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PricingTableComponent } from './pricing/pricing.component';
import { ProductsComponent } from './products/products.component';
import { BusinessComponent } from './business/business.component';
import { DemoComponent } from './demo/demo.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { BecomePartnerComponent } from './become-partner/become-partner.component';
import { HardwareComponent } from './hardware/hardware.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pricing', component: PricingTableComponent },
  { path: 'products/:slug', component: ProductsComponent },
  { path: 'business/:slug', component: BusinessComponent },
  { path: 'demo', component: DemoComponent},
  { path: 'marketplace', component: MarketplaceComponent },
  { path: 'become-partner', component: BecomePartnerComponent },
  { path: 'hardware/pos-terminals', component: HardwareComponent },
  // Redirect any unknown paths to home
  { path: '**', redirectTo: '' }
];

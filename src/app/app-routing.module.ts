import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';

import { ContactFormComponent } from './contact-form/contact-form.component';

import { PricingTableComponent } from './pricing/pricing.component';
import { DemoComponent } from './demo/demo.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'pricing', component: PricingTableComponent },
  { path: 'contact', component: ContactFormComponent },
  { path: 'demo', component: DemoComponent },


//   { path: '**', redirectTo: '' } // Redirect to home for any unknown routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
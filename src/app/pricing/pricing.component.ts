import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, ContactFormComponent, NgFor, NgClass],
})
export class PricingComponent {
  activeTab: 'monthly' | 'yearly' = 'yearly'; // Default selected tab

  plans = [
    { name: 'Starter', monthlyPrice: 200, yearlyPrice: 100 },
    { name: 'Standard', monthlyPrice: 250, yearlyPrice: 125 },
    { name: 'Advanced', monthlyPrice: 500, yearlyPrice: 250 },
  ];

  features: string[] = [
    'Cloud based POS Systems',
    'Dashboards Management',
    'Menu Management',
    'Customer Management',
    'Order History Management',
    'Dine-In Table Management',
    'Coupons & Discounts',
    'Reporting Management',
    'Admin & Users Management',
    'Staff Tips Management',
    'ZATCA E-Invoicing Integrations',
    'Inventory Management',
    'Vendor & Purchase Management',
    'Foods Recipes & Costing',
    'Customer Loyalty Program',
    'Offline Mode & Utility',
    'Machine Payment Integration (Mada, Geidea, NamiPay, Neoleap)',
    'Customer Display',
    'Waiter Tab - POS',
    'DigiDiner Order Online Web',
    'Kitchen Display System (KDS)',
    'Queue Management Systems (QMS)',
    'Delivery Aggregators',
    'KIOSK - Self Ordering',
    'Qlub Integration with DigiPOS',
    'ERP Integration with DigiPOS',
  ];

  addons: string[] = [
    'Add-on Example 1',
    'Add-on Example 2',
    'Add-on Example 3',
    'Add-on Example 4',
  ];

  switchTab(tab: 'monthly' | 'yearly'): void {
    this.activeTab = tab;
  }
}

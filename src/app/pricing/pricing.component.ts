import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { NgClass, NgFor, NgForOf, NgIf, NgSwitch, NgSwitchCase } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pricing-table',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css'],
  imports:[NavbarComponent, FooterComponent, NgFor, NgForOf, NgIf,
     ContactFormComponent, NgClass, FormsModule, NgSwitch, NgSwitchCase ]
})
export class PricingTableComponent {
  isYearly = true;

  pricingPlans = [
    {
      name: 'Starter',
      originalPrice: 199,
      monthlyPrice: 199,
      yearlyPrice: 99,
      color: 'bg-orange-400'
    },
    {
      name: 'Standard',
      originalPrice: 249,
      monthlyPrice: 249,
      yearlyPrice: 125,
      color: 'bg-orange-500'
    },
    {
      name: 'Advanced',
      originalPrice: 499,
      monthlyPrice: 499,
      yearlyPrice: 249,
      color: 'bg-orange-600'
    }
  ];
features = [
  { name: 'Cloud based POS Systems', starter: 'check', standard: 'check', advanced: 'check' },
  { name: 'Dashboards Management', starter: 'check', standard: 'check', advanced: 'check' },
  { name: 'Menu Management', starter: 'check', standard: 'check', advanced: 'check' },
  { name: 'Customer Management', starter: 'check', standard: 'check', advanced: 'check' },
  { name: 'Order History Management', starter: 'check', standard: 'check', advanced: 'check' },
  { name: 'Dine-In Table Management', starter: 'check', standard: 'check', advanced: 'check' },
  { name: 'Coupons & Discounts', starter: 'check', standard: 'check', advanced: 'check' },
  { name: 'Reporting Management', starter: 'check', standard: 'check', advanced: 'check' },
  { name: 'Admin & Users Management', starter: 'check', standard: 'check', advanced: 'check' },
  { name: 'Staff Tips Management', starter: 'cross', standard: 'check', advanced: 'check' },
  { name: 'ZATCA E-Invoicing Integrations', starter: 'cross', standard: 'check', advanced: 'check' },
  { name: 'Inventory Management', starter: 'cross', standard: 'check', advanced: 'check' },
  { name: 'Vendor & Purchase Management', starter: 'cross', standard: 'check', advanced: 'check' },
  { name: 'Foods Recipes & Costing', starter: 'cross', standard: 'check', advanced: 'check' },
  { name: 'Customer Loyalty Program', starter: 'addon', standard: 'check', advanced: 'check' },
  { name: 'Offline Mode & Utility', starter: 'cross', standard: 'check', advanced: 'check' },
  { name: 'Machine Payment Integration (Mada, Geidea, NamiPay, Neoleap)', starter: 'addon', standard: 'check', advanced: 'check' },
  { name: 'Customer Display', starter: 'addon', standard: 'check', advanced: 'check' },
  { name: 'Waiter Tab - POS', starter: 'addon', standard: 'addon', advanced: 'check' },
  { name: 'DigiDiner Order Online Web', starter: 'addon', standard: 'addon', advanced: 'check' },
  { name: 'Kitchen Display System (KDS)', starter: 'cross', standard: 'addon', advanced: 'check' },
  { name: 'Queue Management Systems (QMS)', starter: 'cross', standard: 'addon', advanced: 'check' },
  { name: 'Delivery Aggregators', starter: 'cross', standard: 'addon', advanced: 'check' },
  { name: 'KIOSK - Self Ordering', starter: 'cross', standard: 'addon', advanced: 'check' },
  { name: 'Qlub Integration with DigiPOS', starter: 'cross', standard: 'addon', advanced: 'check' },
  { name: 'ERP Integration with DigiPOS', starter: 'cross', standard: 'addon', advanced: 'check' }
];

  getCurrentPrice(plan: any): number {
    return this.isYearly ? plan.yearlyPrice : plan.monthlyPrice;
  }
}
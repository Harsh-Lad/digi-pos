import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-office-sections',
  templateUrl: './office-sections.component.html',
  styleUrls: ['./office-sections.component.css'],
  standalone: true,
  imports: [NgClass, NgFor],
})
export class OfficeSectionsComponent {
  activeTab = 'Front Office';
  activeProductIndex = 0;

  tabs = ['Front Office', 'Back Office', 'Retail'];

  data: Record<string, { name: string; description: string; image: string }[]> = {
    'Front Office': [
      {
        name: 'Cloud Point of Sales',
        description: `DigiPOS Cloud POS is a smart, cloud-based system that helps businesses manage sales, inventory, and customers in real time. It's easy to use, secure, and works across multiple locations.`,
        image: 'assets/images/Cloud_Restaurant_POS.png',
      },
      {
        name: 'Waiter Tab',
        description: `Empower waiters to take orders tableside using tablets and sync with the main POS.`,
        image: 'assets/images/Cloud_Restaurant_POS.png',
      },
      {
        name: 'DigiKDS - Kitchen Display System',
        description: `Real-time kitchen order updates for faster fulfillment and less confusion.`,
        image: 'assets/images/Cloud_Restaurant_POS.png',
      },
      // Add more...
    ],
    'Back Office': [
      {
        name: 'Inventory Management',
        description: `Track stock levels, automate reorders, and reduce wastage.`,
        image: 'assets/images/Cloud_Restaurant_POS.png',
      },
      {
        name: 'Purchasing Module',
        description: `Create and manage purchase orders from multiple vendors.`,
        image: 'assets/images/Cloud_Restaurant_POS.png',
      },
    ],
    'Retail': [
      {
        name: 'Retail POS',
        description: `Powerful POS built for chain stores, with barcode scanning and offers.`,
        image: 'assets/images/Cloud_Restaurant_POS.png',
      },
      {
        name: 'Loyalty Engine',
        description: `Reward repeat customers and improve retention with loyalty points.`,
        image: 'assets/images/Cloud_Restaurant_POS.png',
      },
    ],
  };

  get activeProducts() {
    return this.data[this.activeTab];
  }

  get currentProduct() {
    return this.activeProducts[this.activeProductIndex];
  }

  switchTab(tab: string) {
    this.activeTab = tab;
    this.activeProductIndex = 0;
  }

  selectProduct(index: number) {
    this.activeProductIndex = index;
  }

  next() {
    this.activeProductIndex = (this.activeProductIndex + 1) % this.activeProducts.length;
  }

  prev() {
    this.activeProductIndex =
      (this.activeProductIndex - 1 + this.activeProducts.length) % this.activeProducts.length;
  }
}

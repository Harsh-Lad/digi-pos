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
        name: 'Cloud Restaurant POS',
        description: `Complete restaurant management solution tailored for food service businesses.`,
        image: 'assets/images/Cloud_Restaurant_POS.png',
      },
      {
        name: 'Online Ordering System',
        description: `Enable customers to place orders directly through your website or app.`,
        image: 'assets/images/Cloud_Restaurant_POS.png',
      },
      {
        name: 'KIOSK - Self Ordering',
        description: `Self-service kiosks for customers to browse menu and place orders independently.`,
        image: 'assets/images/Cloud_Restaurant_POS.png',
      },
      {
        name: 'Waiter Tab',
        description: `Empower waiters to take orders tableside using tablets and sync with the main POS.`,
        image: 'assets/images/Cloud_Restaurant_POS.png',
      },
      {
        name: 'Customer Display',
        description: `Digital screens showing order details and prices to enhance customer transparency.`,
        image: 'assets/images/Cloud_Restaurant_POS.png',
      },
      {
        name: 'DigiKDS - Kitchen Display System',
        description: `Real-time kitchen order updates for faster fulfillment and less confusion.`,
        image: 'assets/images/Cloud_Restaurant_POS.png',
      },
      {
        name: 'QR Ordering - Table Ordering',
        description: `Allow customers to scan QR codes and order directly from their tables.`,
        image: 'assets/images/Cloud_Restaurant_POS.png',
      },
      {
        name: 'Restaurant Queue Management',
        description: `Digital system to manage waiting lists and optimize seating efficiency.`,
        image: 'assets/images/Cloud_Restaurant_POS.png',
      },
    ],
    'Back Office': [
      {
        name: 'Inventory Management',
        description: `Create and manage purchase orders from multiple vendors.`,
        image: 'assets/images/Cloud_Restaurant_POS.png',
      },
      {
        name: 'Product & Menu Management',
        description: `Create and manage your product catalog and menu items with pricing and options.`,
        image: 'assets/images/Cloud_Restaurant_POS.png',
      },
      {
        name: 'Recipe Management',
        description: `Define and track ingredient quantities for recipes to monitor costs and inventory.`,
        image: 'assets/images/Cloud_Restaurant_POS.png',
      },
      {
        name: 'Purchase & Supply Chain Management',
        description: `Streamline your purchasing process and manage vendor relationships efficiently.`,
        image: 'assets/images/Cloud_Restaurant_POS.png',
      },
    ],
    'Retail': [
      {
        name: 'Cloud Point of Sales',
        description: `Powerful POS built for chain stores, with barcode scanning and offers.`,
        image: 'assets/images/Cloud_Restaurant_POS.png',
      },
      {
        name: 'Barcode Management',
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

import { NgClass, NgFor, NgStyle } from '@angular/common';
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
        image: 'front-office/Cloud POS.png',
      },
      {
        name: 'Waiter Tab',
        description: `Empower waiters to take orders tableside using tablets and sync with the main POS.`,
        image: 'front-office/Waiter Tab.png',
      },
      {
        name: 'DigiKDS - Kitchen Display System',
        description: `Real-time kitchen order updates for faster fulfillment and less confusion.`,
        image: 'front-office/KDS.png',
      },
      {
        name: 'Customer Display',
        description: `Digital screens showing order details and prices to enhance customer transparency.`,
        image: 'front-office/Customer Display.png',
      },
      {
        name: 'KIOSK - Self Ordering',
        description: `Self-service kiosks for customers to browse menu and place orders independently.`,
        image: 'front-office/Self Ordering Kiosk.png',
      },


      {
        name: 'Online Ordering',
        description: `Enable customers to place orders directly through your website or app.`,
        image: 'front-office/Online Order.png',
      },
      {
        name: 'Table Ordering',
        description: `Allow customers to scan QR codes and order directly from their tables.`,
        image: 'front-office/Table Ordering.png',
      },
      {
        name: 'Queue Management System',
        description: `Digital system to manage waiting lists and optimize seating efficiency.`,
        image: 'front-office/Queue.png',
      },
    ],
    'Back Office': [
      {
        name: 'Inventory Management',
        description: `Create and manage purchase orders from multiple vendors.`,
        image: 'back-office/Inventory.png',
      },
      {
        name: 'Product & Menu Management',
        description: `Create and manage your product catalog and menu items with pricing and options.`,
        image: 'back-office/Porduct & Menu.png',
      },
      {
        name: 'Recipe Management',
        description: `Define and track ingredient quantities for recipes to monitor costs and inventory.`,
        image: 'back-office/Recipe.png',
      },
      {
        name: 'Purchase & Supply Chain Management',
        description: `Streamline your purchasing process and manage vendor relationships efficiently.`,
        image: 'back-office/Purchase.png',
      },
    ],
    'Retail': [
      {
        name: 'Cloud Point of Sales',
        description: `Powerful POS built for chain stores, with barcode scanning and offers.`,
        image: 'front-office/Cloud POS.png',
      },
      {
        name: 'Barcode Management',
        description: `Reward repeat customers and improve retention with loyalty points.`,
        image: 'front-office/Cloud POS.png',
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

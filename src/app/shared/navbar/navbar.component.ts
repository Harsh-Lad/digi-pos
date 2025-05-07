// src/app/shared/navbar/navbar.component.ts
import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router'; // ✅ required for routerLink
import { CommonModule, NgClass, NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    NgClass, // ✅ this is required for [ngClass]
    NgIf,
    NgFor,
    RouterModule,
  ],
  templateUrl: './navbar.component.html',
})

export class NavbarComponent {
  isOpen = false;
  activeDropdown: string | null = null;
  scrolled = false;

  navItems = [
    { name: 'Products', href: '/products', hasDropdown: true },
    { name: 'Hardware', href: '/hardware', hasDropdown: true },
    { name: 'Business Types', href: '/business-types', hasDropdown: true },
    { name: 'Marketplace', href: '/marketplace', hasDropdown: true },
    { name: 'Become a Partner', href: '/partner', hasDropdown: false },
    { name: 'Pricing', href: '/pricing', hasDropdown: false },
  ];

  productCategories = [
    {
      title: 'FRONT OFFICE',
      items: [
        { icon: 'computer', name: 'Cloud POS', href: '/products/cloud-pos', description: 'Powerful point of sale system for all business types.' },
        { icon: 'flash_on', name: 'Waiter Tab', href: '/products/waiter-tab', description: 'Mobile ordering solution for efficient table service.' },
        { icon: 'layers', name: 'DigiKDS', href: '/products/digikds', description: 'Kitchen display system for streamlined operations.' },
        { icon: 'monitor', name: 'Customer Display', href: '/products/customer-display', description: 'Interactive display for enhanced customer experience.' },
      ]
    },
    {
      title: 'BACK OFFICE',
      items: [
        { icon: 'bar_chart', name: 'Product & Menu Management', href: '/products/menu-management', description: 'Comprehensive menu and product management tools.' },
        { icon: 'layers', name: 'Recipe Management', href: '/products/recipe-management', description: 'Detailed recipe tracking and cost analysis.' },
        { icon: 'shopping_bag', name: 'Inventory Management', href: '/products/inventory-management', description: 'Real-time inventory tracking and management.' },
        { icon: 'local_shipping', name: 'Purchase & Supply Chain', href: '/products/supply-chain', description: 'Streamlined purchasing and vendor management.' },
      ]
    },
  ];

  hardwareCategories = [
    {
      title: 'HARDWARE',
      items: [
        { icon: 'dns', name: 'POS Terminals', href: '/hardware/pos-terminals', description: 'Reliable hardware solutions for your business.' },
        { icon: 'desktop_windows', name: 'Self-Ordering Kiosks', href: '/hardware/self-ordering-kiosks', description: 'Self-service kiosks to reduce wait times.' },
        { icon: 'print', name: 'Printers', href: '/hardware/printers', description: 'Receipt and kitchen printers for all needs.' },
        { icon: 'qr_code_scanner', name: 'Barcode Scanners', href: '/hardware/barcode-scanners', description: 'Fast and accurate barcode scanning solutions.' },
      ]
    }
  ];

  businessTypes = [
    {
      title: 'RESTAURANT SECTORS',
      description: 'Solutions tailored for restaurants, cafes, quick service, and mobile food businesses.',
      items: [
        { icon: 'restaurant', name: 'Dine-In Services Restaurants', href: '/business-types/restaurants', description: 'Complete restaurant management solution.' },
        { icon: 'local_cafe', name: 'Cafes & Bakery', href: '/business-types/cafes', description: 'Streamlined operations for cafes and coffee shops.' },
        { icon: 'fastfood', name: 'Quick Services', href: '/business-types/food-trucks', description: 'Mobile solutions for food trucks and pop-ups.' },
        { icon: 'local_shipping', name: 'Kiosks & Food Trucks', href: '/business-types/kiosks-food-trucks', description: 'Mobile solutions for kiosks and food trucks.' },
      ]
    },
    {
      title: 'RETAIL SECTORS',
      description: 'Comprehensive POS and management tools for pharmacies, laundries, apparel, florists, salons, and supermarkets.',
      items: [
        { icon: 'local_pharmacy', name: 'Pharmacy', href: '/business-types/restaurants', description: 'Complete pharmacy management solution.' },
        { icon: 'local_laundry_service', name: 'Laundry', href: '/business-types/cafes', description: 'Efficient POS and workflow for laundries.' },
        { icon: 'checkroom', name: 'Apparel', href: '/business-types/food-trucks', description: 'Retail management for clothing and apparel stores.' },
        { icon: 'local_florist', name: 'Flower shop', href: '/business-types/supermarkets', description: 'POS and inventory for florists.' },
        { icon: 'content_cut', name: 'Salon', href: '/business-types/supermarkets', description: 'Salon appointment and sales management.' },
        { icon: 'shopping_cart', name: 'Supermarkets', href: '/business-types/supermarkets', description: 'Comprehensive supermarket management system.' },
      ]
    }
  ];

  marketplace = [
    {
      title: 'INTEGRATIONS',
      items: [
        { icon: 'security', name: 'ZATCA e-invoice', href: '/marketplace/zatca', description: 'Compliant e-invoicing for Saudi regulations.' },
        { icon: 'credit_card', name: 'Geidea', href: '/marketplace/geidea', description: 'Integrated payment processing solution.' },
        { icon: 'credit_card', name: 'NamiPay', href: '/marketplace/namipay', description: 'Seamless payment processing integration.' },
        { icon: 'credit_card', name: 'Neoleap', href: '/marketplace/neoleap', description: 'Modern payment solutions for businesses.' },
        { icon: 'credit_card', name: 'MyFatoora', href: '/marketplace/myfatoora', description: 'Comprehensive payment gateway integration.' },
        { icon: 'delivery_dining', name: 'Deliverect', href: '/marketplace/deliverect', description: 'Delivery platform integration for restaurants.' },
      ]
    }
  ];

  getDropdownContent(name: string) {
    switch (name) {
      case 'Products': return this.productCategories;
      case 'Hardware': return this.hardwareCategories;
      case 'Business Types': return this.businessTypes;
      case 'Marketplace': return this.marketplace;
      default: return [];
    }
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
    document.body.style.overflow = this.isOpen ? 'hidden' : 'auto';
  }

  closeMenu() {
    this.isOpen = false;
    document.body.style.overflow = 'auto';
  }

  @HostListener('window:scroll', [])
  onScroll() {
    this.scrolled = window.scrollY > 10;
  }
}

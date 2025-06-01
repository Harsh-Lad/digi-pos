import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { ContactFormComponent } from '../contact-form/contact-form.component';

const PRODUCTS_DATA = [
  {
    title: "FRONT OFFICE",
    items: [
      { name: "Cloud Point of Sales", link: "/products/cloud-pos", description: "Powerful point of sale system for all business types.", icon: "point_of_sale" },
      { name: "Waiter Tab", link: "/products/waiter-tab", description: "Mobile ordering solution for efficient table service.", icon: "tablet_android" },
      { name: "DigiKDS - Kitchen Display System", link: "/products/digikds", description: "Kitchen display screens for order management.", icon: "kitchen" },
      { name: "Customer Display", link: "/products/customer-display", description: "Interactive display for enhanced customer experience.", icon: "display_settings" },
      { name: "KIOSK", link: "/products/kiosk", description: "Self-service kiosk for customer ordering and payment.", icon: "touch_app" },
      { name: "Table Ordering", link: "/products/table-ordering", description: "Digital menu and ordering system for table service.", icon: "dinner_dining" },
      { name: "Online Ordering", link: "/products/online-ordering", description: "Custom branded online ordering platform for takeout and delivery.", icon: "shopping_cart" },
      { name: "Queue Management System", link: "/products/queue-management-system", description: "Digital queue system for efficient customer flow management.", icon: "pending" },
    ],
  },
  {
    title: "BACK OFFICE",
    items: [
      { name: "Product & Menu Management", link: "/products/product-menu-management", description: "Comprehensive menu and product management tools.", icon: "menu_book" },
      { name: "Recipe Management", link: "/products/recipe-management", description: "Detailed recipe tracking and cost analysis.", icon: "restaurant" },
      { name: "Inventory Management", link: "/products/inventory-management", description: "Real-time inventory tracking and management.", icon: "inventory" },
      { name: "Purchase & Supply Chain Management", link: "/products/purchase-supply-chain-management", description: "Streamlined purchasing and vendor management.", icon: "local_shipping" },
    ],
  },
  {
    title: "RETAIL",
    items: [
      { name: "Cloud Point of Sales", link: "/products/retail-pos", description: "In-depth sales analysis and performance tracking for retail.", icon: "storefront" },
    ],
  },
];

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  imports: [NgIf, NavbarComponent, FooterComponent, ContactFormComponent]
})
export class ProductsComponent implements OnInit {
  slug: string | null = null;

  constructor(private route: ActivatedRoute) {}

  getProductDetails(slug: string | null) {
    if (!slug) return null;
    for (const section of PRODUCTS_DATA) {
      const product = section.items.find(item => item.link.endsWith(slug));
      if (product) return product;
    }
    return null;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.slug = params.get('slug');
      const productDetails = this.getProductDetails(this.slug);
      console.log(productDetails); // Replace with actual logic to display product details
    });
  }
}

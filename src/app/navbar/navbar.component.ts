import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"
import { RouterModule } from "@angular/router"

// Define menu types for type safety
type MenuKey = 'products' | 'hardware' | 'business' | 'marketplace';
type MenuItem = {
  name: string;
  link: string;
  description: string;
  icon: string;
}
type MenuSection = {
  title: string;
  items: MenuItem[];
}
type MegaMenu = {
  title: string;
  sections: MenuSection[];
}
type MegaMenus = {
  [key in MenuKey]: MegaMenu;
}

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  standalone: true,
  imports: [CommonModule, RouterModule],
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent {
  activeMenu: MenuKey | null = null// Set 'products' as initially active to match the example
  mobileMenuOpen: boolean = false; // Add property to track mobile menu state
  
  // Define available menu keys to use in the template
  menuKeys: MenuKey[] = ['products', 'hardware', 'business', 'marketplace'];

  // Mega menu data structure with proper typing
  megaMenus: MegaMenus = {
    products: {
      title: "Products",
      sections: [
        {
          title: "FRONT OFFICE",
          items: [
            {
              name: "Cloud Point of Sales",
              link: "/products/cloud-pos",
              description: "Powerful point of sale system for all business types.",
              icon: "monitor",
            },
            {
              name: "Waiter Tab",
              link: "/products/waiter-tab",
              description: "Mobile ordering solution for efficient table service.",
              icon: "tablet",
            },
            {
              name: "DigiKDS - Kitchen Display System",
              link: "/products/digikds",
              description: "Kitchen display system for streamlined operations.",
              icon: "layers",
            },
            {
              name: "Customer Display",
              link: "/products/customer-display",
              description: "Interactive display for enhanced customer experience.",
              icon: "monitor",
            },
            {
              name: "KIOSK",
              link: "/products/kiosk",
              description: "Self-service kiosk for customer ordering and payment.",
              icon: "smartphone",
            },
            {
              name: "Table Ordering",
              link: "/products/table-ordering",
              description: "Digital menu and ordering system for table service.",
              icon: "utensils",
            },
            {
              name: "Online Ordering",
              link: "/products/online-ordering",
              description: "Custom branded online ordering platform for takeout and delivery.",
              icon: "shopping-bag",
            },
            {
              name: "Queue Management System",
              link: "/products/queue-management-system",
              description: "Digital queue system for efficient customer flow management.",
              icon: "users",
            },
          ],
        },
        {
          title: "BACK OFFICE",
          items: [
            {
              name: "Product & Menu Management",
              link: "/products/product-menu-management",
              description: "Comprehensive menu and product management tools.",
              icon: "file-text",
            },
            {
              name: "Recipe Management",
              link: "/products/recipe-management",
              description: "Detailed recipe tracking and cost analysis.",
              icon: "file-spreadsheet",
            },
            {
              name: "Inventory Management",
              link: "/products/inventory-management",
              description: "Real-time inventory tracking and management.",
              icon: "package",
            },
            {
              name: "Purchase & Supply Chain Management",
              link: "/products/purchase-supply-chain-management",
              description: "Streamlined purchasing and vendor management.",
              icon: "truck",
            },
          ],
        },
        {
          title: "RETAIL",
          items: [
            {
              name: "Cloud Point of Sales",
              link: "/products/retail-pos",
              description: "In-depth sales analysis and performance tracking for retail.",
              icon: "chart-column",
            },
          ],
        },
      ],
    },
    hardware: {
      title: "Hardware",
      sections: [
        {
          title: "Hardware",
          items: [
            {
              name: "POS Terminals",
              link: "/hardware/pos-terminals",
              description: "Various models of point of sale terminals for different business needs.",
              icon: "credit-card",
            },
            {
              name: "Self-Ordering Kiosks",
              link: "/hardware/self-ordering-kiosks",
              description: "Customer-facing kiosks for self-service ordering.",
              icon: "computer",
            },
            {
              name: "KDS Screens",
              link: "/hardware/kds-screens",
              description: "Kitchen display screens for order management.",
              icon: "display",
            },
            {
              name: "Tablets",
              link: "/hardware/tablets",
              description: "iOS & Android tablets for mobile POS solutions.",
              icon: "tablet",
            },
            {
              name: "Handheld Devices",
              link: "/hardware/handheld-devices",
              description: "Portable devices for on-the-go order taking.",
              icon: "smartphone",
            },
            {
              name: "Printers",
              link: "/hardware/printers",
              description: "Receipt and kitchen printers for your business.",
              icon: "printer",
            },
            {
              name: "Cash Drawers",
              link: "/hardware/cash-drawers",
              description: "Secure cash storage solutions.",
              icon: "archive",
            },
            {
              name: "Bar Code Scanners",
              link: "/hardware/barcode-scanners",
              description: "Fast and accurate product scanning devices.",
              icon: "barcode",
            },
          ],
        },
      ],
    },
    business: {
      title: "Business Types",
      sections: [
        {
          title: "RESTAURANTS",
          items: [
            {
              name: "Café & Bakery",
              link: "/business/cafe-bakery",
              description: "POS solutions tailored for cafés and bakeries.",
              icon: "coffee",
            },
            {
              name: "Quick Service",
              link: "/business/quick-service",
              description: "Fast and efficient systems for quick service restaurants.",
              icon: "fast-forward",
            },
            {
              name: "Kiosks & Food Trucks",
              link: "/business/kiosks-food-trucks",
              description: "Mobile POS solutions for food trucks and kiosks.",
              icon: "truck",
            },
            {
              name: "Dine-In Service Restaurants",
              link: "/business/dine-in-service",
              description: "Complete POS systems for full-service dining establishments.",
              icon: "utensils",
            },
          ],
        },
        {
          title: "RETAIL",
          items: [
            {
              name: "Pharmacy",
              link: "/business/pharmacy",
              description: "Specialized POS systems for pharmacies and drugstores.",
              icon: "first-aid",
            },
            {
              name: "Laundry",
              link: "/business/laundry",
              description: "POS solutions for laundry and dry cleaning businesses.",
              icon: "droplet",
            },
            {
              name: "Garments",
              link: "/business/garments",
              description: "Inventory and sales management for garment retailers.",
              icon: "shirt",
            },
            {
              name: "Apparel",
              link: "/business/apparel",
              description: "POS systems designed for clothing and apparel stores.",
              icon: "shopping-bag",
            },
            {
              name: "Flower Shop",
              link: "/business/flower-shop",
              description: "Specialized solutions for florists and flower shops.",
              icon: "flower",
            },
            {
              name: "Salon",
              link: "/business/salon",
              description: "POS and appointment systems for salons and spas.",
              icon: "scissors",
            },
            {
              name: "Supermarket",
              link: "/business/supermarket",
              description: "Comprehensive POS solutions for grocery and supermarkets.",
              icon: "shopping-cart",
            },
          ],
        },
      ],
    },
    marketplace: {
      title: "Marketplace",
      sections: [
        {
          title: "PAYMENT INTEGRATIONS",
          items: [
            {
              name: "NamiPay",
              link: "/marketplace/namipay",
              description: "Seamless payment processing integration.",
              icon: "credit-card",
            },
            {
              name: "Neoleap",
              link: "/marketplace/neoleap",
              description: "Modern payment solutions for businesses.",
              icon: "credit-card",
            },
            {
              name: "Qlub",
              link: "/marketplace/qlub",
              description: "Digital payment solutions for restaurants.",
              icon: "wallet",
            },
            {
              name: "MyFatoora",
              link: "/marketplace/myfatoora",
              description: "Online payment gateway integration.",
              icon: "credit-card",
            },
            {
              name: "Credimax",
              link: "/marketplace/credimax",
              description: "Credit card processing solutions.",
              icon: "credit-card",
            },
            {
              name: "Hyperpay",
              link: "/marketplace/hyperpay",
              description: "Secure online payment gateway.",
              icon: "shield",
            },
            {
              name: "BenefitPay",
              link: "/marketplace/benefitpay",
              description: "Mobile payment solution integration.",
              icon: "smartphone",
            },
            {
              name: "Ingenico",
              link: "/marketplace/ingenico",
              description: "Payment hardware and software solutions.",
              icon: "credit-card",
            },
          ],
        },
        {
          title: "BUSINESS INTEGRATIONS",
          items: [
            {
              name: "Zatca E-Invoicing",
              link: "/marketplace/zatca",
              description: "Tax authority e-invoicing compliance solution.",
              icon: "file-text",
            },
            {
              name: "Geidia",
              link: "/marketplace/geidia",
              description: "Business management and integration services.",
              icon: "briefcase",
            },
            {
              name: "Deliverect",
              link: "/marketplace/deliverect",
              description: "Delivery integration for restaurants.",
              icon: "truck",
            },
            {
              name: "ERPNext",
              link: "/marketplace/erpnext",
              description: "Open source ERP system integration.",
              icon: "database",
            },
          ],
        },
      ],
    },
  }

  toggleMenu(menu: MenuKey): void {
    this.activeMenu = this.activeMenu === menu ? null : menu;
  }
  
  // Add method to toggle the mobile menu
  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
}

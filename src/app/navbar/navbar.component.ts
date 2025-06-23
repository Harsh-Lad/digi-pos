import { Component, type OnInit, type OnDestroy, PLATFORM_ID, Inject, ElementRef, ViewChild, HostListener } from "@angular/core"
import { CommonModule, isPlatformBrowser } from "@angular/common"
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
  styleUrls: ["./navbar.component.css"],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class NavbarComponent implements OnInit, OnDestroy {
  activeMenu: MenuKey | null = null;
  mobileMenuOpen: boolean = false; // Add property to track mobile menu state
  menuKeys: MenuKey[] = ['products', 'hardware', 'business', 'marketplace'];
  closeTimeout: any = null; // Add this to manage the close timeout
  resizeListener: any;
  isBrowser: boolean;

  @ViewChild('navbarElement') navbarElement!: ElementRef;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }


  closeMobileMenu() {
    this.mobileMenuOpen = false;
    this.activeMenu = null;
  }



  // @HostListener('document:click', ['$event'])
  // handleClickOutside(event: Event) {
  //   this.closeMenuOnOutsideClick(event);
  // }

  // Mega menu data structure with proper typing
  megaMenus: MegaMenus = {
    products: {
      title: "Products",
      sections: [
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
      ],
    },
    hardware: {
      title: "Hardware",
      sections: [
      {
        title: "Hardware",
        items: [
        { name: "POS Terminals", link: "/hardware/pos-terminals", description: "Various models of point of sale terminals for different business needs.", icon: "point_of_sale" },
        { name: "Self-Ordering Kiosks", link: "/hardware/self-ordering-kiosks", description: "Customer-facing kiosks for self-service ordering.", icon: "touch_app" },
        { name: "KDS Screens", link: "/hardware/kds-screens", description: "Kitchen display screens for order management.", icon: "kitchen" },
        { name: "Tablets", link: "/hardware/tablets", description: "iOS & Android tablets for mobile POS solutions.", icon: "tablet" },
        { name: "Handheld Devices", link: "/hardware/handheld-devices", description: "Portable devices for on-the-go order taking.", icon: "devices" },
        { name: "Printers", link: "/hardware/printers", description: "Receipt and kitchen printers for your business.", icon: "print" },
        { name: "Cash Drawers", link: "/hardware/cash-drawers", description: "Secure cash storage solutions.", icon: "payments" },
        { name: "Bar Code Scanners", link: "/hardware/barcode-scanners", description: "Fast and accurate product scanning devices.", icon: "qr_code_scanner" },
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
        { name: "Fine Dine", link: "/business/cafe-bakery", description: "POS solutions tailored for cafés and bakeries.", icon: "restaurant_menu" },
        { name: "Casual Dining ", link: "/business/dine-in-service", description: "Complete POS systems for full-service dining establishments.", icon: "restaurant" },
        { name: "Quick Service", link: "/business/quick-service", description: "Fast and efficient systems for quick service restaurants.", icon: "fastfood" },
        { name: "Food Trucks", link: "/business/kiosks-food-trucks", description: "Mobile POS solutions for food trucks and kiosks.", icon: "local_shipping" },
        { name: "Café & Bakery", link: "/business/cafe-bakery", description: "POS solutions tailored for cafés and bakeries.", icon: "coffee" },
        { name: "Cloud Kitchen", link: "/business/cloud-kitchen", description: "POS solutions for delivery-only restaurants.", icon: "outdoor_grill" },
        ],
      },
      {
        title: "RETAIL",
        items: [
        { name: "Supermarket", link: "/business/supermarket", description: "Comprehensive POS solutions for grocery and supermarkets.", icon: "local_grocery_store" },
        { name: "Pharmacy", link: "/business/pharmacy", description: "Specialized POS systems for pharmacies and drugstores.", icon: "medication" },
        { name: "Garments & Apparels", link: "/business/garments", description: "Inventory and sales management for garment retailers.", icon: "checkroom" },
        { name: "Laundry Shop", link: "/business/laundry", description: "POS solutions for laundry and dry cleaning businesses.", icon: "dry_cleaning" },
        { name: "Flower Shop", link: "/business/flower-shop", description: "Specialized solutions for florists and flower shops.", icon: "local_florist" },
        { name: "Salon", link: "/business/salon", description: "POS and appointment systems for salons and spas.", icon: "spa" },
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
        { name: "Geidea", link: "/marketplace/geidea", description: "Business management and integration services.", icon: "business_center" },
        { name: "NamiPay", link: "/marketplace/namipay", description: "Seamless payment processing integration.", icon: "payments" },
        { name: "Neoleap", link: "/marketplace/neoleap", description: "Modern payment solutions for businesses.", icon: "credit_score" },
        { name: "Credimax", link: "/marketplace/credimax", description: "Credit card processing solutions.", icon: "credit_card" },
        { name: "Hyperpay", link: "/marketplace/hyperpay", description: "Secure online payment gateway.", icon: "security" },
        { name: "BenefitPay", link: "/marketplace/benefitpay", description: "Mobile payment solution integration.", icon: "smartphone" },
        { name: "MyFatoora", link: "/marketplace/myfatoora", description: "Online payment gateway integration.", icon: "payment" },
        { name: "Ingenico", link: "/marketplace/ingenico", description: "Payment hardware and software solutions.", icon: "contactless" },
        ],
      },
      {
        title: "BUSINESS INTEGRATIONS",
        items: [
        { name: "Zatca E-Invoicing", link: "/marketplace/zatca", description: "Tax authority e-invoicing compliance solution.", icon: "receipt" },
        { name: "Deliverect", link: "/marketplace/deliverect", description: "Delivery integration for restaurants.", icon: "delivery_dining" },
        { name: "Qlub", link: "/marketplace/qlub", description: "Digital payment solution for restaurant tables.", icon: "restaurant_menu" },
        { name: "ERPNext", link: "/marketplace/erpnext", description: "Open source ERP system integration.", icon: "integration_instructions" },
        ],
      },
      ],
    }
  };
    
    openMenu(menu: MenuKey): void {
      // Clear any existing timeout to prevent the menu from closing
      if (this.closeTimeout) {
        clearTimeout(this.closeTimeout);
        this.closeTimeout = null;
      }
      this.activeMenu = menu;
    }
  
    startCloseMenu(): void {
      // Set a small delay before actually closing the menu
      // This gives time to move the cursor to the dropdown
      this.closeTimeout = setTimeout(() => {
        this.activeMenu = null;
        this.closeTimeout = null;
      }, 150); // 150ms delay gives enough time to move to dropdown
    }
  
    // Keep the mobile menu toggle method
    toggleMobileMenu(): void {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    }
  
    // Keep the original toggleMenu for mobile
    toggleMenu(menu: MenuKey): void {
      this.activeMenu = this.activeMenu === menu ? null : menu;
    }
  
    // Method to close menu when clicking outside
    closeMenuOnOutsideClick(event: MouseEvent): void {
      // Check if there's an active menu and if the click was outside of the navbar
      if (this.activeMenu && this.navbarElement) {
        // Check if the click target is contained within the navbar
        const clickedInside = this.navbarElement.nativeElement.contains(event.target);
        
        if (!clickedInside) {
          // Click was outside navbar, close any open menus
          this.activeMenu = null;
          // Close mobile menu too if open
          if (this.mobileMenuOpen) {
            this.mobileMenuOpen = false;
          }
        }
      }
    }
  
    ngOnInit() {
      // Add resize listener to close mobile menu on larger screens
      if (this.isBrowser) {
        this.resizeListener = () => {
          if (window.innerWidth >= 1024) { // Use lg breakpoint (1024px)
            this.mobileMenuOpen = false;
          }
        }
        window.addEventListener("resize", this.resizeListener);
      }
    }
  
    ngOnDestroy() {
      // Clean up event listeners
      if (this.isBrowser && this.resizeListener) {
        window.removeEventListener("resize", this.resizeListener);
      }
      if (this.closeTimeout) {
        clearTimeout(this.closeTimeout);
      }
    }

    // Helper method to determine the appropriate grid class based on number of sections
    getGridClass(sectionCount: number): string {
      switch(sectionCount) {
        case 1: return 'grid-cols-1';
        case 2: return 'grid-cols-2';
        case 3: return 'grid-cols-3';
        case 4: return 'grid-cols-4';
        default: return sectionCount > 4 ? 'grid-cols-4' : 'grid-cols-1';
      }
    }
  }

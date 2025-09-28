import { Injectable } from '@angular/core';

// Define menu types for type safety
export type MenuKey = 'products' | 'hardware' | 'business' | 'marketplace';

export type MenuItem = {
  name: string;
  link: string;
  description: string;
  icon: string;
  nameKey: string;
  descKey: string;
}

export type MenuSection = {
  title: string;
  titleKey: string;
  items: MenuItem[];
}

export type MegaMenu = {
  title: string;
  titleKey: string;
  sections: MenuSection[];
}

export type MegaMenus = {
  [key in MenuKey]: MegaMenu;
}

@Injectable({
  providedIn: 'root'
})
export class NavbarDataService {

  getMegaMenuData(): MegaMenus {
    return {
      products: {
        title: "Products",
        titleKey: "navbar.products",
        sections: [
          {
            title: "FRONT OFFICE",
            titleKey: "navbar.megaMenu.products.frontOffice",
            items: [
              { 
                name: "Cloud Point of Sales", 
                nameKey: "navbar.megaMenu.products.cloudPos",
                link: "/products/cloud-pos", 
                description: "Powerful point of sale system for all business types.", 
                descKey: "navbar.megaMenu.products.cloudPosDesc",
                icon: "point_of_sale" 
              },
              { 
                name: "Waiter Tab", 
                nameKey: "navbar.megaMenu.products.waiterTab",
                link: "/products/waiter-tab", 
                description: "Mobile ordering solution for efficient table service.", 
                descKey: "navbar.megaMenu.products.waiterTabDesc",
                icon: "tablet_android" 
              },
              { 
                name: "DigiKDS - Kitchen Display System", 
                nameKey: "navbar.megaMenu.products.digikds",
                link: "/products/digikds", 
                description: "Kitchen display screens for order management.", 
                descKey: "navbar.megaMenu.products.digikdsDesc",
                icon: "kitchen" 
              },
              { 
                name: "Customer Display", 
                nameKey: "navbar.megaMenu.products.customerDisplay",
                link: "/products/customer-display", 
                description: "Interactive display for enhanced customer experience.", 
                descKey: "navbar.megaMenu.products.customerDisplayDesc",
                icon: "display_settings" 
              },
              { 
                name: "KIOSK", 
                nameKey: "navbar.megaMenu.products.kiosk",
                link: "/products/kiosk", 
                description: "Self-service kiosk for customer ordering and payment.", 
                descKey: "navbar.megaMenu.products.kioskDesc",
                icon: "touch_app" 
              },
              { 
                name: "Table Ordering", 
                nameKey: "navbar.megaMenu.products.tableOrdering",
                link: "/products/table-ordering", 
                description: "Digital menu and ordering system for table service.", 
                descKey: "navbar.megaMenu.products.tableOrderingDesc",
                icon: "dinner_dining" 
              },
              { 
                name: "Online Ordering", 
                nameKey: "navbar.megaMenu.products.onlineOrdering",
                link: "/products/online-ordering", 
                description: "Custom branded online ordering platform for takeout and delivery.", 
                descKey: "navbar.megaMenu.products.onlineOrderingDesc",
                icon: "shopping_cart" 
              },
              { 
                name: "Queue Management System", 
                nameKey: "navbar.megaMenu.products.queueManagement",
                link: "/products/queue-management-system", 
                description: "Digital queue system for efficient customer flow management.", 
                descKey: "navbar.megaMenu.products.queueManagementDesc",
                icon: "pending" 
              },
            ],
          },
          {
            title: "BACK OFFICE",
            titleKey: "navbar.megaMenu.products.backOffice",
            items: [
              { 
                name: "Product & Menu Management", 
                nameKey: "navbar.megaMenu.products.productMenuManagement",
                link: "/products/product-menu-management", 
                description: "Comprehensive menu and product management tools.", 
                descKey: "navbar.megaMenu.products.productMenuManagementDesc",
                icon: "menu_book" 
              },
              { 
                name: "Recipe Management", 
                nameKey: "navbar.megaMenu.products.recipeManagement",
                link: "/products/recipe-management", 
                description: "Detailed recipe tracking and cost analysis.", 
                descKey: "navbar.megaMenu.products.recipeManagementDesc",
                icon: "restaurant" 
              },
              { 
                name: "Inventory Management", 
                nameKey: "navbar.megaMenu.products.inventoryManagement",
                link: "/products/inventory-management", 
                description: "Real-time inventory tracking and management.", 
                descKey: "navbar.megaMenu.products.inventoryManagementDesc",
                icon: "inventory" 
              },
              { 
                name: "Purchase & Supply Chain Management", 
                nameKey: "navbar.megaMenu.products.purchaseSupplyChain",
                link: "/products/purchase-supply-chain-management", 
                description: "Streamlined purchasing and vendor management.", 
                descKey: "navbar.megaMenu.products.purchaseSupplyChainDesc",
                icon: "local_shipping" 
              },
            ],
          },
          {
            title: "RETAIL",
            titleKey: "navbar.megaMenu.products.retail",
            items: [
              { 
                name: "Cloud Point of Sales", 
                nameKey: "navbar.megaMenu.products.retailPos",
                link: "/products/cloud-pos", 
                description: "In-depth sales analysis and performance tracking for retail.", 
                descKey: "navbar.megaMenu.products.retailPosDesc",
                icon: "storefront" 
              },
            ],
          },
        ],
      },
      hardware: {
        title: "Hardware",
        titleKey: "navbar.hardware",
        sections: [
          {
            title: "Hardware",
            titleKey: "navbar.hardware",
            items: [
              { 
                name: "POS Terminals", 
                nameKey: "navbar.megaMenu.hardware.posTerminals",
                link: "/hardware/pos-terminals", 
                description: "Various models of point of sale terminals for different business needs.", 
                descKey: "navbar.megaMenu.hardware.posTerminalsDesc",
                icon: "point_of_sale" 
              },
              { 
                name: "Self-Ordering Kiosks", 
                nameKey: "navbar.megaMenu.hardware.selfOrderingKiosks",
                link: "/hardware/self-ordering-kiosks", 
                description: "Customer-facing kiosks for self-service ordering.", 
                descKey: "navbar.megaMenu.hardware.selfOrderingKiosksDesc",
                icon: "touch_app" 
              },
              { 
                name: "KDS Screens", 
                nameKey: "navbar.megaMenu.hardware.kdsScreens",
                link: "/hardware/kds-screens", 
                description: "Kitchen display screens for order management.", 
                descKey: "navbar.megaMenu.hardware.kdsScreensDesc",
                icon: "kitchen" 
              },
              { 
                name: "Tablets", 
                nameKey: "navbar.megaMenu.hardware.tablets",
                link: "/hardware/tablets", 
                description: "iOS & Android tablets for mobile POS solutions.", 
                descKey: "navbar.megaMenu.hardware.tabletsDesc",
                icon: "tablet" 
              },
              { 
                name: "Handheld Devices", 
                nameKey: "navbar.megaMenu.hardware.handheldDevices",
                link: "/hardware/handheld-devices", 
                description: "Portable devices for on-the-go order taking.", 
                descKey: "navbar.megaMenu.hardware.handheldDevicesDesc",
                icon: "devices" 
              },
              { 
                name: "Printers", 
                nameKey: "navbar.megaMenu.hardware.printers",
                link: "/hardware/printers", 
                description: "Receipt and kitchen printers for your business.", 
                descKey: "navbar.megaMenu.hardware.printersDesc",
                icon: "print" 
              },
              { 
                name: "Cash Drawers", 
                nameKey: "navbar.megaMenu.hardware.cashDrawers",
                link: "/hardware/cash-drawers", 
                description: "Secure cash storage solutions.", 
                descKey: "navbar.megaMenu.hardware.cashDrawersDesc",
                icon: "payments" 
              },
              { 
                name: "Bar Code Scanners", 
                nameKey: "navbar.megaMenu.hardware.barcodeScanners",
                link: "/hardware/barcode-scanners", 
                description: "Fast and accurate product scanning devices.", 
                descKey: "navbar.megaMenu.hardware.barcodeScannersDesc",
                icon: "qr_code_scanner" 
              },
            ],
          },
        ],
      },
      business: {
        title: "Business Types",
        titleKey: "navbar.businessTypes",
        sections: [
          {
            title: "RESTAURANTS",
            titleKey: "navbar.megaMenu.business.restaurants",
            items: [
              { 
                name: "Fine Dine", 
                nameKey: "navbar.megaMenu.business.fineDine",
                link: "/business/fine-dining", 
                description: "POS solutions tailored for cafés and bakeries.", 
                descKey: "navbar.megaMenu.business.fineDineDesc",
                icon: "restaurant_menu" 
              },
              { 
                name: "Casual Dining", 
                nameKey: "navbar.megaMenu.business.casualDining",
                link: "/business/dine-in-service", 
                description: "Complete POS systems for full-service dining establishments.", 
                descKey: "navbar.megaMenu.business.casualDiningDesc",
                icon: "restaurant" 
              },
              { 
                name: "Quick Service", 
                nameKey: "navbar.megaMenu.business.quickService",
                link: "/business/quick-service", 
                description: "Fast and efficient systems for quick service restaurants.", 
                descKey: "navbar.megaMenu.business.quickServiceDesc",
                icon: "fastfood" 
              },
              { 
                name: "Food Trucks", 
                nameKey: "navbar.megaMenu.business.foodTrucks",
                link: "/business/food-trucks", 
                description: "Mobile POS solutions for food trucks and kiosks.", 
                descKey: "navbar.megaMenu.business.foodTrucksDesc",
                icon: "local_shipping" 
              },
              { 
                name: "Café & Bakery", 
                nameKey: "navbar.megaMenu.business.cafeBakery",
                link: "/business/cafe-bakery", 
                description: "POS solutions tailored for cafés and bakeries.", 
                descKey: "navbar.megaMenu.business.cafeBakeryDesc",
                icon: "coffee" 
              },
              { 
                name: "Cloud Kitchen", 
                nameKey: "navbar.megaMenu.business.cloudKitchen",
                link: "/business/cloud-kitchen", 
                description: "POS solutions for delivery-only restaurants.", 
                descKey: "navbar.megaMenu.business.cloudKitchenDesc",
                icon: "outdoor_grill" 
              },
            ],
          },
          {
            title: "RETAIL",
            titleKey: "navbar.megaMenu.business.retail",
            items: [
              { 
                name: "Supermarket", 
                nameKey: "navbar.megaMenu.business.supermarket",
                link: "/business/supermarket", 
                description: "Comprehensive POS solutions for grocery and supermarkets.", 
                descKey: "navbar.megaMenu.business.supermarketDesc",
                icon: "local_grocery_store" 
              },
              { 
                name: "Pharmacy", 
                nameKey: "navbar.megaMenu.business.pharmacy",
                link: "/business/pharmacy", 
                description: "Specialized POS systems for pharmacies and drugstores.", 
                descKey: "navbar.megaMenu.business.pharmacyDesc",
                icon: "medication" 
              },
              { 
                name: "Garments & Apparels", 
                nameKey: "navbar.megaMenu.business.garments",
                link: "/business/garments", 
                description: "Inventory and sales management for garment retailers.", 
                descKey: "navbar.megaMenu.business.garmentsDesc",
                icon: "checkroom" 
              },
              { 
                name: "Laundry Shop", 
                nameKey: "navbar.megaMenu.business.laundry",
                link: "/business/laundry", 
                description: "POS solutions for laundry and dry cleaning businesses.", 
                descKey: "navbar.megaMenu.business.laundryDesc",
                icon: "dry_cleaning" 
              },
              { 
                name: "Flower Shop", 
                nameKey: "navbar.megaMenu.business.flowerShop",
                link: "/business/flower-shop", 
                description: "Specialized solutions for florists and flower shops.", 
                descKey: "navbar.megaMenu.business.flowerShopDesc",
                icon: "local_florist" 
              },
              { 
                name: "Salon", 
                nameKey: "navbar.megaMenu.business.salon",
                link: "/business/salon", 
                description: "POS and appointment systems for salons and spas.", 
                descKey: "navbar.megaMenu.business.salonDesc",
                icon: "spa" 
              },
            ],
          },
        ],
      },
      marketplace: {
        title: "Marketplace",
        titleKey: "navbar.marketplace",
        sections: [
          {
            title: "PAYMENT INTEGRATIONS",
            titleKey: "navbar.megaMenu.marketplace.paymentIntegrations",
            items: [
              { 
                name: "Geidea", 
                nameKey: "navbar.megaMenu.marketplace.geidea",
                link: "/marketplace/geidea", 
                description: "Business management and integration services.", 
                descKey: "navbar.megaMenu.marketplace.geideaDesc",
                icon: "business_center" 
              },
              { 
                name: "NamiPay", 
                nameKey: "navbar.megaMenu.marketplace.namipay",
                link: "/marketplace/namipay", 
                description: "Seamless payment processing integration.", 
                descKey: "navbar.megaMenu.marketplace.namipayDesc",
                icon: "payments" 
              },
              { 
                name: "Neoleap", 
                nameKey: "navbar.megaMenu.marketplace.neoleap",
                link: "/marketplace/neoleap", 
                description: "Modern payment solutions for businesses.", 
                descKey: "navbar.megaMenu.marketplace.neoleapDesc",
                icon: "credit_score" 
              },
              { 
                name: "Credimax", 
                nameKey: "navbar.megaMenu.marketplace.credimax",
                link: "/marketplace/credimax", 
                description: "Credit card processing solutions.", 
                descKey: "navbar.megaMenu.marketplace.credimaxDesc",
                icon: "credit_card" 
              },
              { 
                name: "Hyperpay", 
                nameKey: "navbar.megaMenu.marketplace.hyperpay",
                link: "/marketplace/hyperpay", 
                description: "Secure online payment gateway.", 
                descKey: "navbar.megaMenu.marketplace.hyperpayDesc",
                icon: "security" 
              },
              { 
                name: "BenefitPay", 
                nameKey: "navbar.megaMenu.marketplace.benefitpay",
                link: "/marketplace/benefitpay", 
                description: "Mobile payment solution integration.", 
                descKey: "navbar.megaMenu.marketplace.benefitpayDesc",
                icon: "smartphone" 
              },
              { 
                name: "MyFatoora", 
                nameKey: "navbar.megaMenu.marketplace.myfatoora",
                link: "/marketplace/myfatoora", 
                description: "Online payment gateway integration.", 
                descKey: "navbar.megaMenu.marketplace.myfatooraDesc",
                icon: "payment" 
              },
              { 
                name: "Ingenico", 
                nameKey: "navbar.megaMenu.marketplace.ingenico",
                link: "/marketplace/ingenico", 
                description: "Payment hardware and software solutions.", 
                descKey: "navbar.megaMenu.marketplace.ingenicoDesc",
                icon: "contactless" 
              },
            ],
          },
          {
            title: "BUSINESS INTEGRATIONS",
            titleKey: "navbar.megaMenu.marketplace.businessIntegrations",
            items: [
              { 
                name: "Zatca E-Invoicing", 
                nameKey: "navbar.megaMenu.marketplace.zatca",
                link: "/marketplace/zatca", 
                description: "Tax authority e-invoicing compliance solution.", 
                descKey: "navbar.megaMenu.marketplace.zatcaDesc",
                icon: "receipt" 
              },
              { 
                name: "Deliverect", 
                nameKey: "navbar.megaMenu.marketplace.deliverect",
                link: "/marketplace/deliverect", 
                description: "Delivery integration for restaurants.", 
                descKey: "navbar.megaMenu.marketplace.deliverectDesc",
                icon: "delivery_dining" 
              },
              { 
                name: "Qlub", 
                nameKey: "navbar.megaMenu.marketplace.qlub",
                link: "/marketplace/qlub", 
                description: "Digital payment solution for restaurant tables.", 
                descKey: "navbar.megaMenu.marketplace.qlubDesc",
                icon: "restaurant_menu" 
              },
              { 
                name: "ERPNext", 
                nameKey: "navbar.megaMenu.marketplace.erpnext",
                link: "/marketplace/erpnext", 
                description: "Open source ERP system integration.", 
                descKey: "navbar.megaMenu.marketplace.erpnextDesc",
                icon: "integration_instructions" 
              },
            ],
          },
        ],
      }
    };
  }
}
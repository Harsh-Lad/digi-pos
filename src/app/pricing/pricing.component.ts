import { Component } from "@angular/core"
import { TranslateModule } from "@ngx-translate/core"
import { NavbarComponent } from "../navbar/navbar.component"
import { FooterComponent } from "../footer/footer.component"
import { ContactFormComponent } from "../contact-form/contact-form.component"
import { NgClass, NgFor, NgForOf, NgIf, NgSwitch, NgSwitchCase } from "@angular/common"
import { FormsModule } from "@angular/forms"

@Component({
  selector: "app-pricing-table",
  templateUrl: "./pricing.component.html",
  styleUrls: ["./pricing.component.css"],
  imports: [
    NavbarComponent,
    FooterComponent,
    NgFor,
    NgForOf,
    NgIf,
    ContactFormComponent,
    NgClass,
    FormsModule,
    NgSwitch,
    NgSwitchCase,
    TranslateModule,
  ],
})
export class PricingTableComponent {
  isYearly = true
  openFeatures: string | null = null

  pricingPlans = [
    {
      name: "Starter",
      originalPrice: 199,
      monthlyPrice: 199,
      yearlyPrice: 99,
      color: "bg-[#f48021]",
    },
    {
      name: "Standard",
      originalPrice: 249,
      monthlyPrice: 249,
      yearlyPrice: 125,
      color: "bg-[#f48021]",
    },
    {
      name: "Advanced",
      originalPrice: 499,
      monthlyPrice: 499,
      yearlyPrice: 249,
      color: "bg-[#f48021]",
    },
  ]

  features = [
      { name: "Cloud based POS Systems", translationKey: "cloudBasedPOS", starter: "check", standard: "check", advanced: "check" },
      { name: "Dashboards Management", translationKey: "dashboardsManagement", starter: "check", standard: "check", advanced: "check" },
      { name: "Menu Management", translationKey: "menuManagement", starter: "check", standard: "check", advanced: "check" },
      { name: "Customer Management", translationKey: "customerManagement", starter: "check", standard: "check", advanced: "check" },
      { name: "Order History Management", translationKey: "orderHistoryManagement", starter: "check", standard: "check", advanced: "check" },
      { name: "Dine-In Table Management", translationKey: "dineInTableManagement", starter: "check", standard: "check", advanced: "check" },
      { name: "Coupons & Discounts", translationKey: "couponsDiscounts", starter: "check", standard: "check", advanced: "check" },
      { name: "Reporting Management", translationKey: "reportingManagement", starter: "check", standard: "check", advanced: "check" },
      { name: "Admin & Users Management", translationKey: "adminUsersManagement", starter: "check", standard: "check", advanced: "check" },
      { name: "Staff Tips Management", translationKey: "staffTipsManagement", starter: "cross", standard: "check", advanced: "check" },
      { name: "ZATCA E-Invoicing Integrations", translationKey: "zatcaEInvoicing", starter: "cross", standard: "check", advanced: "check" },
      { name: "Inventory Management", translationKey: "inventoryManagement", starter: "cross", standard: "check", advanced: "check" },
      { name: "Vendor & Purchase Management", translationKey: "vendorPurchaseManagement", starter: "cross", standard: "check", advanced: "check" },
      { name: "Foods Recipes & Costing", translationKey: "foodsRecipesCosting", starter: "cross", standard: "check", advanced: "check" },
      { name: "Customer Loyalty Program", translationKey: "customerLoyaltyProgram", starter: "addon", standard: "addon", advanced: "check" },
      { name: "Offline Mode & Utility", translationKey: "offlineModeUtility", starter: "cross", standard: "check", advanced: "check" },
      {
        name: "Machine Payment Integration (Mada, Geidea, NamiPay, Neoleap)",
        translationKey: "machinePaymentIntegration",
        starter: "addon",
        standard: "check",
        advanced: "check",
      },
      { name: "Customer Display", translationKey: "customerDisplay", starter: "addon", standard: "check", advanced: "check" },
      { name: "Waiter Tab - POS", translationKey: "waiterTabPOS", starter: "addon", standard: "addon", advanced: "addon" },
      { name: "DigiDiner Order Online Web", translationKey: "digiDinerOrderOnline", starter: "addon", standard: "addon", advanced: "check" },
      { name: "Kitchen Display System (KDS)", translationKey: "kitchenDisplaySystem", starter: "addon", standard: "addon", advanced: "addon" },
      { name: "Queue Management Systems (QMS)", translationKey: "queueManagementSystems", starter: "addon", standard: "addon", advanced: "check" },
      { name: "Delivery Aggregators", translationKey: "deliveryAggregators", starter: "addon", standard: "addon", advanced: "addon" },
      { name: "KIOSK - Self Ordering", translationKey: "kioskSelfOrdering", starter: "addon", standard: "addon", advanced: "addon" },
      { name: "Qlub Integration with DigiPOS", translationKey: "qlubIntegration", starter: "addon", standard: "addon", advanced: "addon" },
      { name: "ERP Integration with DigiPOS", translationKey: "erpIntegration", starter: "addon", standard: "addon", advanced: "check" },
    ]

  getCurrentPrice(plan: any): number {
    return this.isYearly ? plan.yearlyPrice : plan.monthlyPrice
  }

  toggleFeatures(planName: string): void {
    if (this.openFeatures === planName) {
      this.openFeatures = null
    } else {
      this.openFeatures = planName
    }
  }

  getPlanFeatureValue(planName: string, feature: any): string {
    switch (planName) {
      case "Starter":
        return feature.starter
      case "Standard":
        return feature.standard
      case "Advanced":
        return feature.advanced
      default:
        return "cross"
    }
  }
}

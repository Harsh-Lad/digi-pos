import { Component } from "@angular/core"
import { TranslateModule } from "@ngx-translate/core"
import { NavbarComponent } from "../navbar/navbar.component"
import { FooterComponent } from "../footer/footer.component"
import { CommonModule } from "@angular/common"
import { RouterModule } from "@angular/router"
import { ContactFormComponent } from "../contact-form/contact-form.component"

@Component({
  selector: "app-marketplace",
  templateUrl: "./marketplace.component.html",
  styleUrls: ["./marketplace.component.css"],
  imports: [
    CommonModule,
    RouterModule,
    NavbarComponent,
    FooterComponent,
    TranslateModule,
    ContactFormComponent
  ],
})
export class MarketplaceComponent {
  marketplaceItems = [
    {
      id: 1,
      logo: 'integrations/4.png',
      name: 'Geidea',
      descriptionKey: 'marketplace.items.geidea',
    },
    {
      id: 2,
      logo: 'integrations/zatca.png',
      name: 'ZATCA',
      descriptionKey: 'marketplace.items.zatca',
    },
    {
      id: 3,
      logo: 'integrations/2.png',
      name: 'NamiPay',
      descriptionKey: 'marketplace.items.namipay',
    },
    {
      id: 4,
      logo: 'integrations/5.png',
      name: 'Deliverect',
      descriptionKey: 'marketplace.items.deliverect',
    },
    {
      id: 5,
      logo: 'integrations/3.png',
      name: 'Neoleap',
      descriptionKey: 'marketplace.items.neoleap',
    },
    {
      id: 6,
      logo: 'integrations/1.png',
      name: 'Qlub',
      descriptionKey: 'marketplace.items.qlub',
    },
    {
      id: 7,
      logo: 'integrations/7.png',
      name: 'MyFatoorah',
      descriptionKey: 'marketplace.items.myfatoorah',
    },
    {
      id: 8,
      logo: 'integrations/6.png',
      name: 'ERPNext',
      descriptionKey: 'marketplace.items.erpnext',
    },
    {
      id: 9,
      logo: 'integrations/credimax.svg',
      name: 'CrediMax',
      descriptionKey: 'marketplace.items.credimax',
    },
    {
      id: 10,
      logo: 'integrations/hyperpay.png',
      name: 'HyperPay',
      descriptionKey: 'marketplace.items.hyperpay',
    },
    {
      id: 11,
      logo: 'integrations/Ingenico.png',
      name: 'Ingenico',
      descriptionKey: 'marketplace.items.ingenico',
    },
    {
      id: 12,
      logo: 'integrations/benefit-logo.jpg',
      name: 'BenefitPay',
      descriptionKey: 'marketplace.items.benefitpay',
    },
  ]
}

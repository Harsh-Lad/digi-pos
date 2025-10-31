import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  private routeTitleMap: { [key: string]: string } = {
    '/': 'pageTitle.home',
    '/home': 'pageTitle.home',
    '/pricing': 'pageTitle.pricing',
    '/demo': 'pageTitle.demo',
    '/products': 'pageTitle.products',
    '/partner': 'pageTitle.partner',
    '/products/cloud-pos': 'pageTitle.cloudPos',
    '/products/waiter-tab': 'pageTitle.waiterTab',
    '/products/digikds': 'pageTitle.digiKds',
    '/products/kds-screens': 'pageTitle.kdsScreens',
    '/products/hardware-tablets': 'pageTitle.hardwareTablets',
    '/products/pos-terminals': 'pageTitle.posTerminals',
    '/products/pos-accessories': 'pageTitle.posAccessories',
    '/products/customer-display': 'pageTitle.customerDisplay',
    '/products/kiosk': 'pageTitle.kiosk',
    '/products/table-ordering': 'pageTitle.tableOrdering',
    '/products/online-ordering': 'pageTitle.onlineOrdering',
    '/products/queue-management-system': 'pageTitle.queueManagement',
    '/products/product-menu-management': 'pageTitle.productMenuManagement',
    '/products/recipe-management': 'pageTitle.recipeManagement',
    '/products/inventory-management': 'pageTitle.inventoryManagement',
    '/products/purchase-supply-chain-management': 'pageTitle.purchaseSupplyChain',
    '/hardware/pos-terminals': 'pageTitle.posTerminals',
    '/business/fine-dining': 'pageTitle.fineDining',
    '/business/casual-dining': 'pageTitle.casualDining',
    '/business/quick-service': 'pageTitle.quickService',
    '/business/food-trucks': 'pageTitle.foodTrucks',
    '/business/cafe-bakery': 'pageTitle.cafeBakery',
    '/business/cloud-kitchen': 'pageTitle.cloudKitchen',
    '/business/supermarket': 'pageTitle.supermarket',
    '/business/pharmacy': 'pageTitle.pharmacy',
    '/business/garments': 'pageTitle.garments',
    '/business/laundry': 'pageTitle.laundry',
    '/business/flower-shop': 'pageTitle.flowerShop',
    '/business/salon': 'pageTitle.salon'
  };

  constructor(
    private router: Router,
    private translate: TranslateService,
    private titleService: Title
  ) {
    this.initializeTitleUpdates();
  }

  private initializeTitleUpdates(): void {
    // Update title on route changes
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.updateTitle(event.url);
      });

    // Update title on language changes
    this.translate.onLangChange.subscribe(() => {
      this.updateTitle(this.router.url);
    });
  }

  private updateTitle(url: string): void {
    // Remove query parameters and fragments from URL
    const cleanUrl = url.split('?')[0].split('#')[0];
    const titleKey = this.routeTitleMap[cleanUrl] || 'pageTitle.home';
    
    this.translate.get(titleKey).subscribe((translatedTitle: string) => {
      this.titleService.setTitle(translatedTitle);
    });
  }

  public setCustomTitle(titleKey: string): void {
    this.translate.get(titleKey).subscribe((translatedTitle: string) => {
      this.titleService.setTitle(translatedTitle);
    });
  }

  public addRouteTitle(route: string, titleKey: string): void {
    this.routeTitleMap[route] = titleKey;
  }
}
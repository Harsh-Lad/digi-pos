import { NgClass, NgFor, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-office-sections',
  templateUrl: './office-sections.component.html',
  styleUrls: ['./office-sections.component.css'],
  standalone: true,
  imports: [NgClass, NgFor, TranslateModule],
})
export class OfficeSectionsComponent implements OnInit {
  activeTab = 'Front Office';
  activeProductIndex = 0;

  tabs = ['Front Office', 'Back Office', 'Retail'];

  constructor(public translate: TranslateService) {}

  data: Record<string, { key: string; image: string }[]> = {
    'Front Office': [
      { key: 'cloudPos', image: 'front-office/Cloud POS.png' },
      { key: 'waiterTab', image: 'front-office/Waiter Tab.png' },
      { key: 'digiKDS', image: 'front-office/KDS.png' },
      { key: 'customerDisplay', image: 'front-office/Customer Display.png' },
      { key: 'kiosk', image: 'front-office/Self Ordering Kiosk.png' },
      { key: 'onlineOrdering', image: 'front-office/Online Order.png' },
      { key: 'tableOrdering', image: 'front-office/Table Ordering.png' },
      { key: 'queueManagement', image: 'front-office/Queue.png' },
    ],
    'Back Office': [
      { key: 'inventoryManagement', image: 'back-office/Inventory.png' },
      { key: 'productMenuManagement', image: 'back-office/Porduct & Menu.png' },
      { key: 'recipeManagement', image: 'back-office/Recipe.png' },
      { key: 'purchaseSupplyChain', image: 'back-office/Purchase.png' },
    ],
    'Retail': [
      { key: 'retailCloudPOS', image: 'front-office/Cloud POS.png' },
      { key: 'barcodeManagement', image: 'front-office/Cloud POS.png' },
    ],
  };

  get activeProducts() {
    return this.data[this.activeTab];
  }

  get currentProduct() {
    return this.activeProducts[this.activeProductIndex];
  }

  ngOnInit() {
    // Listen to language changes to update translations
    this.translate.onLangChange.subscribe(() => {
      // Component will automatically update due to translation methods
    });
  }

  getTabTranslation(tab: string): string {
    switch (tab) {
      case 'Front Office':
        return this.translate.instant('products.frontOffice.title');
      case 'Back Office':
        return this.translate.instant('products.backOffice.title');
      case 'Retail':
        return this.translate.instant('products.retail.title');
      default:
        return tab;
    }
  }

  getProductNameTranslation(key: string): string {
    let tabKey = '';
    if (this.activeTab === 'Front Office') tabKey = 'frontOffice';
    else if (this.activeTab === 'Back Office') tabKey = 'backOffice';
    else if (this.activeTab === 'Retail') tabKey = 'retail';

    // Try nested .title key for activeTab
    let result = this.translate.instant(`products.${tabKey}.${key}.title`);
    if (!result || result === `products.${tabKey}.${key}.title`) {
      // Fallbacks for other tabs
      result = this.translate.instant(`products.frontOffice.${key}.title`);
      if (!result || result === `products.frontOffice.${key}.title`) {
        result = this.translate.instant(`products.backOffice.${key}.title`);
        if (!result || result === `products.backOffice.${key}.title`) {
          result = this.translate.instant(`products.retail.${key}.title`);
        }
      }
    }
    return result;
  }

  getProductDescriptionTranslation(key: string): string {
    let tabKey = '';
    if (this.activeTab === 'Front Office') tabKey = 'frontOffice';
    else if (this.activeTab === 'Back Office') tabKey = 'backOffice';
    else if (this.activeTab === 'Retail') tabKey = 'retail';

    // Try nested .description key for activeTab
    let result = this.translate.instant(`products.${tabKey}.${key}.description`);
    if (!result || result === `products.${tabKey}.${key}.description`) {
      // Fallbacks for other tabs
      result = this.translate.instant(`products.frontOffice.${key}.description`);
      if (!result || result === `products.frontOffice.${key}.description`) {
        result = this.translate.instant(`products.backOffice.${key}.description`);
        if (!result || result === `products.backOffice.${key}.description`) {
          result = this.translate.instant(`products.retail.${key}.description`);
        }
      }
    }
    return result;
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

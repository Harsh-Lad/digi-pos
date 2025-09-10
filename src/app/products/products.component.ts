import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PRODUCTS_DATA, ProductData } from './products-data';
import { FooterComponent } from '../footer/footer.component';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../services/language.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  imports: [FooterComponent, ContactFormComponent, NavbarComponent, NgClass, NgIf, NgFor, TranslateModule, RouterLink],
})
export class ProductsComponent implements OnInit, OnDestroy {
  slug: string | null = null;
  selectedProduct: ProductData | undefined;
  selectedSidebarIndex = 0;
  private langChangeSubscription?: Subscription;

  constructor(
    private route: ActivatedRoute, 
    public translate: TranslateService,
    private languageService: LanguageService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.slug = params.get('slug');
      this.selectedProduct = PRODUCTS_DATA.find(p => p.slug === this.slug!);
      this.selectedSidebarIndex = 0;
    });
  }

  ngOnDestroy(): void {
    if (this.langChangeSubscription) {
      this.langChangeSubscription.unsubscribe();
    }
  }

  onSidebarMenuClick(index: number) {
    this.selectedSidebarIndex = index;
  }

  getSidebarBullets(): string[] {
    const bulletsKey = this.selectedProduct?.sidebarMenu?.[this.selectedSidebarIndex]?.bulletsKey || this.selectedProduct?.sidebarBulletsKey;
    if (bulletsKey) {
      const bullets = this.translate.instant(bulletsKey);
      return Array.isArray(bullets) ? bullets : [bullets];
    }
    return [];
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PRODUCTS_DATA, ProductData } from './products-data';
import { FooterComponent } from '../footer/footer.component';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  imports: [FooterComponent, ContactFormComponent, NavbarComponent, NgClass, NgIf, NgFor],
})
export class ProductsComponent implements OnInit {
  slug: string | null = null;
  selectedProduct: ProductData | undefined;
  selectedSidebarIndex = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.slug = params.get('slug');
      this.selectedProduct = PRODUCTS_DATA.find(p => p.slug === this.slug!);
      this.selectedSidebarIndex = 0;
    });
  }

  onSidebarMenuClick(index: number) {
    this.selectedSidebarIndex = index;
  }

}

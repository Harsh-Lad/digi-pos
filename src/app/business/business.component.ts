import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BUSINESS_DATA, BusinessData } from './business-data';
import { FooterComponent } from '../footer/footer.component';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../services/language.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css'],
  imports: [FooterComponent, ContactFormComponent, NavbarComponent, NgIf, NgFor, TranslateModule, RouterLink],
})
export class BusinessComponent implements OnInit, OnDestroy {
  slug: string | null = null;
  selectedBusiness: BusinessData | undefined;
  private langChangeSubscription?: Subscription;

  trackByTitle = (_: number, f: any) => f?.titleKey ?? _;

  constructor(
    private route: ActivatedRoute,
    public translate: TranslateService,
    private languageService: LanguageService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.slug = params.get('slug');
      this.selectedBusiness = BUSINESS_DATA.find(b => b.slug === this.slug!);
    });
  }

  ngOnDestroy(): void {
    if (this.langChangeSubscription) {
      this.langChangeSubscription.unsubscribe();
    }
  }
}
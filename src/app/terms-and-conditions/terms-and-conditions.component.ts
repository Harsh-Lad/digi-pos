import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-terms-and-conditions',
  imports: [TranslateModule, CommonModule, RouterLink, NavbarComponent, FooterComponent],
  templateUrl: './terms-and-conditions.component.html',
  styleUrl: './terms-and-conditions.component.css'
})
export class TermsAndConditionsComponent {
  public currentLanguage: string;

  constructor(private translate: TranslateService) {
    this.currentLanguage = this.translate.currentLang || this.translate.getDefaultLang() || 'en';
    this.translate.onLangChange.subscribe((event: any) => {
      this.currentLanguage = event.lang;
    });
  }
}

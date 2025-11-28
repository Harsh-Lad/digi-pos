import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-privacy-policy',
  imports: [TranslateModule, CommonModule, RouterLink, NavbarComponent, FooterComponent],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.css'
})
export class PrivacyPolicyComponent {
  public currentLanguage: string;

  constructor(private translate: TranslateService) {
    this.currentLanguage = this.translate.currentLang || this.translate.getDefaultLang() || 'en';
    this.translate.onLangChange.subscribe((event: any) => {
      this.currentLanguage = event.lang;
    });
  }
}

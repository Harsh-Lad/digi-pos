import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [TranslateModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  public currentLanguage: string;

  constructor(private translate: TranslateService) {
  this.currentLanguage = this.translate.currentLang || this.translate.getDefaultLang() || 'en';
    this.translate.onLangChange.subscribe((event: any) => {
      this.currentLanguage = event.lang;
    });
  }
}

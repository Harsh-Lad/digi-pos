import { Component, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from './services/language.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {
  title = 'digi-pos';

  constructor(
    private router: Router, 
    @Inject(PLATFORM_ID) private platformId: Object,
    private translate: TranslateService,
    private languageService: LanguageService
  ) {
    // Initialize translation service
    this.translate.addLangs(['en', 'ar']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
    // Language service will automatically initialize and handle RTL/font switching
  }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (isPlatformBrowser(this.platformId)) {
          window.scrollTo(0, 0); // Scroll to the top of the page
        }
      }
    });
  }

  someMethod(event: any) {
    // ...existing code...
  }
}

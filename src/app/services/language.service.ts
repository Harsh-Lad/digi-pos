import { Injectable, Renderer2, RendererFactory2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private renderer: Renderer2;
  private isArabicSubject = new BehaviorSubject<boolean>(false);
  public isArabic$ = this.isArabicSubject.asObservable();

  constructor(
    private translate: TranslateService,
    private rendererFactory: RendererFactory2,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
    
    // Initialize with current language
    this.initializeLanguage();
    
    // Subscribe to language changes
    this.translate.onLangChange.subscribe(() => {
      this.applyLanguageStyles();
    });
  }

  private initializeLanguage(): void {
    this.applyLanguageStyles();
  }

  private applyLanguageStyles(): void {
    const currentLang = this.translate.currentLang || this.translate.defaultLang || 'en';
    const isArabic = currentLang === 'ar';
    
    this.isArabicSubject.next(isArabic);
    
    if (isArabic) {
      // Add Arabic font and RTL direction
      this.renderer.setAttribute(this.document.documentElement, 'dir', 'rtl');
      this.renderer.setAttribute(this.document.documentElement, 'lang', 'ar');
      this.renderer.addClass(this.document.body, 'arabic-font');
    } else {
      // Remove Arabic font and set LTR direction
      this.renderer.setAttribute(this.document.documentElement, 'dir', 'ltr');
      this.renderer.setAttribute(this.document.documentElement, 'lang', 'en');
      this.renderer.removeClass(this.document.body, 'arabic-font');
    }
  }

  public setLanguage(lang: string): void {
    this.translate.use(lang);
  }

  public getCurrentLanguage(): string {
    return this.translate.currentLang || this.translate.defaultLang || 'en';
  }

  public isCurrentLanguageArabic(): boolean {
    return this.getCurrentLanguage() === 'ar';
  }
}
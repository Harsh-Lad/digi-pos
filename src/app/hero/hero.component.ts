import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser, NgIf, NgStyle } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  standalone: true,
  imports: [NgStyle, TranslateModule],
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  words = ['Growth', 'Inventory', 'Sales', 'Success', 'Transactions'];
  arabicWords = ['النمو', 'الجرد', 'المبيعات', 'النجاح', 'المعاملات'];
  images = [
    'hero/Growth.jpg',
    'hero/Inventory.jpg',
    'hero/Sales.jpg',
    'hero/Success.jpg',
    'hero/Transactions.jpg',
  ];

  currentWord = '';
  currentIndex = 0;
  isDeleting = false;
  speed = 120;
  currentImage = '';
  isBrowser = false;
  bgImage = ''; // Add this property

  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    private translate: TranslateService
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      this.currentImage = this.images[0];
      this.updateBgImage(); // Add this method call
      this.typeEffect();
      
      // Listen to language changes
      this.translate.onLangChange.subscribe(() => {
        // Reset the animation with new language
        this.currentWord = '';
        this.currentIndex = 0;
        this.isDeleting = false;
        this.typeEffect();
      });
    }
  }

  // Add this method to update bgImage
  updateBgImage(): void {
    this.bgImage = `url('${this.currentImage}')`;
  }

  typeEffect(): void {
    const currentLang = this.translate.currentLang || 'en';
    const currentWords = currentLang === 'ar' ? this.arabicWords : this.words;
    const fullText = currentWords[this.currentIndex];

    if (this.isDeleting) {
      this.currentWord = fullText.substring(0, this.currentWord.length - 1);
    } else {
      this.currentWord = fullText.substring(0, this.currentWord.length + 1);
    }

    if (!this.isDeleting && this.currentWord === fullText) {
      setTimeout(() => {
        this.isDeleting = true;
        this.typeEffect();
      }, 1500);
      return;
    } else if (this.isDeleting && this.currentWord === '') {
      this.isDeleting = false;
      this.currentIndex = (this.currentIndex + 1) % this.words.length;
      this.currentImage = this.images[this.currentIndex];
      this.updateBgImage(); // Update bgImage when the image changes
    }

    setTimeout(() => this.typeEffect(), this.isDeleting ? 50 : this.speed);
  }

  get backgroundStyle() {
    return {
      'background-image': `url('${this.currentImage}')`
    };
  }
}

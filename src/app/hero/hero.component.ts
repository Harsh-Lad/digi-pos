import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser, NgIf, NgStyle } from '@angular/common';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  standalone: true,
  imports: [NgStyle],
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  words = ['Operations', 'Billing', 'Inventory'];
  images = [
    'assets/images/man.jpg',
    'assets/images/man2.webp',
    'assets/images/man.jpg'
  ];

  currentWord = '';
  currentIndex = 0;
  isDeleting = false;
  speed = 120;
  currentImage = '';
  isBrowser = false;
  bgImage = ''; // Add this property

  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      this.currentImage = this.images[0];
      this.updateBgImage(); // Add this method call
      this.typeEffect();
    }
  }

  // Add this method to update bgImage
  updateBgImage(): void {
    this.bgImage = `url('${this.currentImage}')`;
  }

  typeEffect(): void {
    const fullText = this.words[this.currentIndex];

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

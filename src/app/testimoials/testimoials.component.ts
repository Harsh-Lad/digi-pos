import { NgClass, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimoials.component.html',
  styleUrls: ['./testimoials.component.css'],
  imports: [NgFor, NgClass, TranslateModule],
})
export class TestimonialsComponent {
  testimonials = [
    {
      textKey: 'testimonials.items.perozAgha.text',
      nameKey: 'testimonials.items.perozAgha.name',
      companyKey: 'testimonials.items.perozAgha.company',
      logo: '/clients/Peroz Logo.png',
    },
    {
      textKey: 'testimonials.items.julieCastillo.text',
      nameKey: 'testimonials.items.julieCastillo.name',
      companyKey: 'testimonials.items.julieCastillo.company',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS514_lI1jAFIay7BpTuwPsWfgqcnwGVo-keg&s',
    },
    {
      textKey: 'testimonials.items.islamuddinShaikh.text',
      nameKey: 'testimonials.items.islamuddinShaikh.name',
      companyKey: 'testimonials.items.islamuddinShaikh.company',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqV1rvTlVafApBTDbi1d_7COTa5DWBPjUtjw&s',
    },
    {
      textKey: 'testimonials.items.shamsherKhan.text',
      nameKey: 'testimonials.items.shamsherKhan.name',
      companyKey: 'testimonials.items.shamsherKhan.company',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW1aVFZUJN1_3pkOYPBkNQSwHSGzjnAdqA9w&s',
    },
    {
      textKey: 'testimonials.items.shameerPalangat.text',
      nameKey: 'testimonials.items.shameerPalangat.name',
      companyKey: 'testimonials.items.shameerPalangat.company',
      logo: 'https://images.deliveryhero.io/image/hungerstation/restaurant/logo/bf92e8810bb54de2c0ce3454a6ab9153.jpg',
    },
    {
      textKey: 'testimonials.items.enayath.text',
      nameKey: 'testimonials.items.enayath.name',
      companyKey: 'testimonials.items.enayath.company',
      logo: 'https://scoopempire.com/wp-content/uploads/2018/06/WhatsApp-Image-2018-06-13-at-3.04.46-PM.jpeg',
    },
    {
      textKey: 'testimonials.items.mrElias.text',
      nameKey: 'testimonials.items.mrElias.name',
      companyKey: 'testimonials.items.mrElias.company',
      logo: 'https://images.deliveryhero.io/image/hungerstation/restaurant/logo/3651fb804c3932f1f75fa601dec9833c.jpeg',
    },
    {
      textKey: 'testimonials.items.mubark.text',
      nameKey: 'testimonials.items.mubark.name',
      companyKey: 'testimonials.items.mubark.company',
      logo: '/clients/Avindar Logo.jpg',
    },
    {
      textKey: 'testimonials.items.bakhosAlDaouk.text',
      nameKey: 'testimonials.items.bakhosAlDaouk.name',
      companyKey: 'testimonials.items.bakhosAlDaouk.company',
      logo: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR74gYoJ3eLH-f1gtp4U-rphHYwtCA65TePsBm7-tNJ2FZWW4BP',
    },
  ];

  page = 1;
  pageSize = 6;

  get totalPages() {
    return Math.ceil(this.testimonials.length / this.pageSize);
  }

  get pagedTestimonials() {
    const pages = [];
    for (let i = 0; i < this.totalPages; i++) {
      pages.push(
        this.testimonials.slice(i * this.pageSize, (i + 1) * this.pageSize)
      );
    }
    return pages;
  }

  onScroll(event: Event) {
    const container = event.target as HTMLElement;
    const scrollLeft = container.scrollLeft;
    const width = container.offsetWidth;
    const newPage = Math.round(scrollLeft / width) + 1;
    if (this.page !== newPage) {
      this.page = newPage;
    }
  }

  smoothScroll(container: HTMLElement, target: number) {
    const start = container.scrollLeft;
    const change = target - start;
    const duration = 400;
    let currentTime = 0;
    const increment = 20;

    function animateScroll() {
      currentTime += increment;
      const val = easeInOutQuad(currentTime, start, change, duration);
      container.scrollLeft = val;
      if (currentTime < duration) {
        requestAnimationFrame(animateScroll);
      }
    }

    function easeInOutQuad(t: number, b: number, c: number, d: number) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    animateScroll();
  }

  scrollToPage(page: number, container: HTMLElement) {
    page = Math.max(1, Math.min(page, this.totalPages));
    const width = container.offsetWidth;
    const target = width * (page - 1);

    // Remove scroll-snap-type temporarily for smooth scroll compatibility
    const prevSnapType = container.style.scrollSnapType;
    container.style.scrollSnapType = 'none';

    // Try native smooth scroll
    try {
      container.scrollTo({
        left: target,
        behavior: 'smooth',
      });
    } catch {
      this.smoothScroll(container, target);
    }

    // Restore snap after scroll finishes (~500ms)
    setTimeout(() => {
      container.style.scrollSnapType = prevSnapType || '';
    }, 500);
  }
}

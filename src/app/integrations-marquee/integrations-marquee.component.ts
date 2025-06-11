import { NgFor } from '@angular/common';
import { Component, OnInit, AfterViewInit, PLATFORM_ID, Inject, ElementRef, Renderer2 } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-integrations-marquee',
  templateUrl: './integrations-marquee.component.html',
  styleUrl: './integrations-marquee.component.css',
  imports: [NgFor],
  standalone: true,
})
export class IntegrationsMarqueeComponent implements OnInit, AfterViewInit {
  images = [
    'integrations/1.png',
    'integrations/2.png',
    'integrations/3.png',
    'integrations/4.png',
    'integrations/5.png',
    'integrations/6.png',
    'integrations/7.png',
  ];

  animationDuration = 30; // seconds
  
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {}
  
  ngOnInit(): void {
    // No DOM operations here
  }
  
  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.setAnimationSpeed();
    }
  }
  
  private setAnimationSpeed(): void {
    const marqueeElement = this.elementRef.nativeElement.querySelector('.marquee-content');
    if (marqueeElement) {
      this.renderer.setStyle(marqueeElement, 'animation-duration', `${this.animationDuration}s`);
    }
  }
}

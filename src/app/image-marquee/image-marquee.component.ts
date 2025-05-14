import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-image-marquee',
  templateUrl: './image-marquee.component.html',
  styleUrls: ['./image-marquee.component.css'],
  imports: [NgFor]
})
export class ImageMarqueeComponent {
  images = [
    'https://1000logos.net/wp-content/uploads/2020/09/Cinnabon-logo.jpg',
    'https://1000logos.net/wp-content/uploads/2020/09/Cinnabon-logo.jpg',
    'https://1000logos.net/wp-content/uploads/2020/09/Cinnabon-logo.jpg',
    'https://1000logos.net/wp-content/uploads/2020/09/Cinnabon-logo.jpg',
    'https://1000logos.net/wp-content/uploads/2020/09/Cinnabon-logo.jpg'
  ];
}

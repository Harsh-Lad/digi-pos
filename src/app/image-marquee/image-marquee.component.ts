import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-image-marquee',
  templateUrl: './image-marquee.component.html',
  styleUrls: ['./image-marquee.component.css'],
  imports: [NgFor, TranslateModule]
})
export class ImageMarqueeComponent {
  images = [
    '/clients/Alamain Spare Parts Logo.jpg',
    '/clients/Avindar Logo.jpg',
    '/clients/Baan Holding Enab W Teen.jpeg',
    '/clients/Blhalib Logo.Jpeg',
    '/clients/Blu Jam Logo.jpg',
    '/clients/Brasa Logo-01.png',
    '/clients/Eleven Juice Logo.png',
    '/clients/Gloria Jeans Logo.jpg',
    '/clients/Hasbro Logo.jpg',
    '/clients/Lolos Kitchen.jpg',
    '/clients/Nice Bun Logo.png',
    '/clients/NYC Logo.jpg',
    '/clients/Peroz Logo.png',
    '/clients/Set Kafa Logo.jpeg',
    '/clients/Taya logo.png',
    '/clients/The Cuts Logo.png',
    '/clients/Unknown.jpeg',
    '/clients/Unknown.png',
    
  ];
}

import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-marquee',
  templateUrl: './marquee-slider.component.html',
  styleUrls: ['./marquee-slider.component.css'],
  imports: [NgFor]
})
export class MarqueeComponent {
  items = [
    'Cloud-Based Solution',
    'Online & Offline Functionality',
    'Real-time Dashboard',
    'Inventory Management',
    'Order Sync',
    'Customer Insights'
  ];
}

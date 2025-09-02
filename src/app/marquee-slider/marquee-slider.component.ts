import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-marquee',
  templateUrl: './marquee-slider.component.html',
  styleUrls: ['./marquee-slider.component.css'],
  imports: [NgFor, TranslateModule]
})
export class MarqueeComponent {
  items = [
    'marquee.cloudBasedSolution',
    'marquee.onlineOfflineFunctionality',
    'marquee.realTimeDashboard',
    'marquee.inventoryManagement',
    'marquee.orderSync',
    'marquee.customerInsights'
  ];

  constructor(public translate: TranslateService) {}
}

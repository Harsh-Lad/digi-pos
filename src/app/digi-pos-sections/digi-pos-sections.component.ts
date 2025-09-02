import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor, NgClass } from '@angular/common';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

interface Card {
  headingKey: string;
  titleKey: string;
  subtextKey: string;
  descriptionKey: string;
  icon: string;
  svgPath?: string;
}

@Component({
  selector: 'app-digi-pos-sections',
  templateUrl: './digi-pos-sections.component.html',
  styleUrls: ['./digi-pos-sections.component.css'],
  standalone: true,
  imports: [CommonModule, NgFor, NgClass, TranslateModule],
  animations: [
    trigger('cardAnimation', [
      state('active', style({
        transform: 'scale(1)',
        backgroundColor: '#002999',
        borderRadius: '9999px'
      })),
      state('inactive', style({
        transform: 'scale(1.0)',
        backgroundColor: 'transparent',
        borderRadius: '0.75rem'
      })),
      transition('inactive => active', [
        animate('300ms ease-out')
      ]),
      transition('active => inactive', [
        animate('200ms ease-in')
      ])
    ]),
    trigger('slideAnimation', [
      transition(':increment', [
        style({ transform: 'translateX(20px)', opacity: 0 }),
        animate('300ms ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ]),
      transition(':decrement', [
        style({ transform: 'translateX(-20px)', opacity: 0 }),
        animate('300ms ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ])
    ])
  ]
})
export class DigiPosSectionsComponent implements OnInit {
  selectedIndex: number = 0;
  previousIndex: number = 0;
  
  cards: Card[] = [
    {
      headingKey: 'products.businessModels.fineDining.heading',
      titleKey: 'products.businessModels.fineDining.title',
      subtextKey: 'products.businessModels.fineDining.subtitle',
      descriptionKey: 'products.businessModels.fineDining.description',
      icon: 'assets/icons/pos.png',
      svgPath: '/Artboard 3.svg'
    },
    {
      headingKey: 'products.businessModels.quickService.heading',
      titleKey: 'products.businessModels.quickService.title',
      subtextKey: 'products.businessModels.quickService.subtitle',
      descriptionKey: 'products.businessModels.quickService.description',
      icon: 'assets/icons/inventory.png',
      svgPath: '/Artboard 4.svg'
    },
    {
      headingKey: 'products.businessModels.foodTrucks.heading',
      titleKey: 'products.businessModels.foodTrucks.title',
      subtextKey: 'products.businessModels.foodTrucks.subtitle',
      descriptionKey: 'products.businessModels.foodTrucks.description',
      icon: 'assets/icons/dining.png',
      svgPath: '/Artboard 5.svg'
    },
    {
      headingKey: 'products.businessModels.cafeBakery.heading',
      titleKey: 'products.businessModels.cafeBakery.title',
      subtextKey: 'products.businessModels.cafeBakery.subtitle',
      descriptionKey: 'products.businessModels.cafeBakery.description',
      icon: 'assets/icons/delivery.png',
      svgPath: '/Artboard 6.svg'
    }
  ];

  get selectedCard(): Card {
    return this.cards[this.selectedIndex];
  }

  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
  }

  setActiveCard(index: number): void {
    this.previousIndex = this.selectedIndex;
    this.selectedIndex = index;
  }
}

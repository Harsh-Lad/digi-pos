import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor, NgClass } from '@angular/common';
import { trigger, state, style, animate, transition } from '@angular/animations';

interface Card {
  title: string;
  subtext: string;
  description: string;
  icon: string;
  svgPath?: string; // Changed from materialIcon to svgPath
}

@Component({
  selector: 'app-digi-pos-sections',
  templateUrl: './digi-pos-sections.component.html',
  styleUrls: ['./digi-pos-sections.component.css'],
  standalone: true,
  imports: [CommonModule, NgFor, NgClass],
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
      title: 'Fine Dining',
      subtext: 'Elevating Experiences',
      description: 'Our advanced POS system helps you manage transactions efficiently with an intuitive interface.',
      icon: 'assets/icons/pos.png',
      svgPath: '/Artboard 3.svg'
    },
    {
      title: 'Quick Service',
      subtext: 'Speed and Efficiency',
      description: 'Keep track of your inventory levels with automated alerts and easy stock management.',
      icon: 'assets/icons/inventory.png',
      // svgPath: '/leaflet-icon.svg'
      svgPath: '/Artboard 4.svg'
    },
    {
      title: 'Food Trucks',
      subtext: 'On-the-Go Success',
      description: 'Efficiently manage tables, orders, and kitchen operations for your dining establishment.',
      icon: 'assets/icons/dining.png',
      svgPath: '/Artboard 5.svg'
    },
    {
      title: 'Café & Bakery',
      subtext: 'Tech-Infused Convenience',
      description: 'Track and manage your delivery services with real-time updates and route optimization.',
      icon: 'assets/icons/delivery.png',
      svgPath: '/Artboard 6.svg'
    }
  ];

  get selectedCard(): Card {
    return this.cards[this.selectedIndex];
  }

  constructor() { }

  ngOnInit(): void {
  }

  setActiveCard(index: number): void {
    this.previousIndex = this.selectedIndex;
    this.selectedIndex = index;
  }
}

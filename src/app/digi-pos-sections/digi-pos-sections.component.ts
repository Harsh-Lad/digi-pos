import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor, NgClass } from '@angular/common';
import { trigger, state, style, animate, transition } from '@angular/animations';

interface Card {
  title: string;
  subtext: string;
  description: string;
  icon: string;
  materialIcon?: string; // Added material icon property
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
        transform: 'scale(1.05)',
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
      title: 'POS System',
      subtext: 'Streamline your sales process',
      description: 'Our advanced POS system helps you manage transactions efficiently with an intuitive interface.',
      icon: 'assets/icons/pos.png',
      materialIcon: 'point_of_sale'
    },
    {
      title: 'Inventory',
      subtext: 'Track stock in real-time',
      description: 'Keep track of your inventory levels with automated alerts and easy stock management.',
      icon: 'assets/icons/inventory.png',
      materialIcon: 'inventory_2'
    },
    {
      title: 'Analytics',
      subtext: 'Data-driven insights',
      description: 'Make informed business decisions with comprehensive reports and analytics dashboards.',
      icon: 'assets/icons/analytics.png',
      materialIcon: 'analytics'
    },
    {
      title: 'Customer Management',
      subtext: 'Build customer loyalty',
      description: 'Manage customer relationships and boost retention with integrated CRM features.',
      icon: 'assets/icons/customers.png',
      materialIcon: 'people'
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

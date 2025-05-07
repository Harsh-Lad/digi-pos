import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

interface Card {
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-about-digipos',
  templateUrl: './about-digipos.component.html',
  styleUrls: ['./about-digipos.component.css'],
  standalone: true,
  imports: [CommonModule, MatIconModule, RouterModule]
})
export class AboutDigiposComponent {
  cards: Card[] = [
    {
      title: 'Cloud-Based Solution',
      description: 'Access your business data from anywhere, anytime with our secure cloud-based platform.',
      icon: 'cloud'
    },
    {
      title: 'Online & Offline Functionality',
      description: 'Continue operations even during internet outages with our offline mode that syncs when connection is restored.',
      icon: 'sync'
    },
    {
      title: 'Real-time Dashboard',
      description: 'Monitor sales, inventory, and customer data in real-time with our intuitive dashboard.',
      icon: 'dashboard'
    },
    {
      title: 'Inventory Management',
      description: 'Track stock levels, set reorder points, and manage suppliers all in one place.',
      icon: 'inventory'
    },
    {
      title: 'Customer Management',
      description: 'Build customer profiles, track purchase history, and implement loyalty programs.',
      icon: 'group'
    },
    {
      title: 'Advanced Analytics',
      description: 'Gain valuable insights with detailed reports on sales, inventory, staff performance, and more.',
      icon: 'analytics'
    }
  ];
}

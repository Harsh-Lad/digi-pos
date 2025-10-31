import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

interface FaqItem {
  key: string;
  isOpen: boolean;
}

@Component({
  selector: 'app-partner-faq',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './partner-faq.component.html',
  styleUrl: './partner-faq.component.css'
})
export class PartnerFaqComponent {
  faqs: FaqItem[] = [
    { key: 'cost', isOpen: true },
    { key: 'both', isOpen: false },
    { key: 'payment', isOpen: false },
    { key: 'support', isOpen: false },
    { key: 'individuals', isOpen: false },
    { key: 'help', isOpen: false }
  ];

  toggleFaq(index: number): void {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
}

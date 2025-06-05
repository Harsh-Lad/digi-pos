import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimoials.component.html',
  imports: [NgFor],
})
export class TestimonialsComponent {
  testimonials = [
    {
      text: 'The reporting tools in DigiPOS have been invaluable. We can easily track sales trends, identify peak times, and make data-driven decisions to improve our business',
      name: 'Peroz Agha',
      logo: '/clients/Peroz Logo.png',
      company: 'Founder - Peroz Healthy Eatery',
    },
    {
      text: 'The integration with our accounting software has simplified our bookkeeping process. It’s saved us time and money.',
      name: 'Julie Castillo',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS514_lI1jAFIay7BpTuwPsWfgqcnwGVo-keg&s',
      company: 'OM - New York Coffee',
    },
    {
      text: "The reporting capabilities are excellent. We’re able to track sales trends, identify peak times, and analyze our menu performance with ease.",
      name: 'Islamuddin Shaikh',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqV1rvTlVafApBTDbi1d_7COTa5DWBPjUtjw&s',
      company: 'MD - Brasa de Brazil',
    },
    {
      text: 'The customer-facing features, such as the ability to take orders and process payments at the table, have enhanced the dining experience for our guests',
      name: 'Shamsher Khan',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW1aVFZUJN1_3pkOYPBkNQSwHSGzjnAdqA9w&s',
      company: "BM - Taya Restaurant",
    },
    {
      text: "We've used other POS systems, but DigiPOS stands out. The table and kitchen management features have streamlined our service, and support is always responsive.",
      name: 'Carlos R',
      logo: 'https://images.deliveryhero.io/image/hungerstation/restaurant/logo/dec3b5ed065dcf2c8f1c397ffc4717f8.jpg',
      company: 'Juice Eleven',
    },
    {
      text: 'DigiPOS has made our daily operations smooth and stress-free. Orders go straight to the kitchen, billing is quick, and the interface is easy for staff to learn.',
      name: 'Anita M.',
      logo: 'https://images.deliveryhero.io/image/hungerstation/restaurant/logo/3651fb804c3932f1f75fa601dec9833c.jpeg',
      company: 'OWNER - Nice Bun',
    },
  ];
}

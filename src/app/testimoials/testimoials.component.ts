import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimoials.component.html',
  styleUrls: ['./testimoials.component.css'],
  imports: [NgFor, NgClass],
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
      text: 'The reporting capabilities are excellent. We’re able to track sales trends, identify peak times, and analyze our menu performance with ease.',
      name: 'Islamuddin Shaikh',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqV1rvTlVafApBTDbi1d_7COTa5DWBPjUtjw&s',
      company: 'MD - Brasa de Brazil',
    },
    {
      text: 'The customer-facing features, such as the ability to take orders and process payments at the table, have enhanced the dining experience for our guests.',
      name: 'Shamsher Khan',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW1aVFZUJN1_3pkOYPBkNQSwHSGzjnAdqA9w&s',
      company: 'BM - Taya Restaurant',
    },
    {
      text: "I wanted to express my sincere gratitude for your continued partnership and support. We've achieved some fantastic results together, and I truly appreciate your collaboration and commitment. Specifically, your fast response for our requirement has been invaluable to our success.",
      name: 'Shameer Palangat',
      logo: 'https://images.deliveryhero.io/image/hungerstation/restaurant/logo/bf92e8810bb54de2c0ce3454a6ab9153.jpg',
      company: 'IT - Shwaiat Al Khalij',
    },
    {
      text: "I would like to inform you that we are impressed by your DigiPOS, in terms of performance.We highly recommend to our partners and friends as it's highly cost effective and easy to use. Thanks for your support.",
      name: 'Enayath',
      logo: 'https://scoopempire.com/wp-content/uploads/2018/06/WhatsApp-Image-2018-06-13-at-3.04.46-PM.jpeg',
      company: 'IT Manager - SADF',
    },
    {
      text: 'We have found the DigiPOS system to be efficient, effective, and user-friendly. It is easy for staff to access and operate, which helps streamline daily tasks. The system provides clear and comprehensive reports that support both operational and financial decision-making. In terms of customer support, the Digi POS team is highly responsive and helpful. They are quick to resolve any issues that arise, ensuring minimal disruption to our business. Overall, we highly recommend Digi POS for small to medium-sized restaurants. The system offers great value for its competitive cost.',
      name: 'Mr. Elias',
      logo: 'https://images.deliveryhero.io/image/hungerstation/restaurant/logo/3651fb804c3932f1f75fa601dec9833c.jpeg',
      company: 'Operations Manager - Nice Bun',
    },
    {
      text: "I started using the Digi POS system about a month ago, and honestly, it's excellent. It's cloud-based, seamless, and easy to use, especially when adding items and distributing them to printers. Performance is very fast, thank God. The reports are clear and detailed, and the support team was very responsive to my needs. When I requested a custom report, they prepared it in less than a week. Special thanks to Abu Osama and Imran for their wonderful efforts",
      name: 'Mubark',
      logo: '/clients/Avindar Logo.jpg',
      company: 'IT Manager - Avindar ',
    },
    {
      text: 'Peace be upon you. We are a grape and fig restaurant in the Al Hokair Group. We would like to inform you that we use Digipos for accounting in our restaurants. We have three accounts with them, and it is one of the best accounts we have used in terms of ease of operation, good reports that assist accounting, and the ease of adding items. In addition to all of this, I prefer it over other accounting programs. We thank and appreciate your cooperation.',
      name: 'Bakhos Al Daouk',
      logo: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR74gYoJ3eLH-f1gtp4U-rphHYwtCA65TePsBm7-tNJ2FZWW4BP',
      company: 'Operation Manager - Baan Holding',
    },
  ];

  page = 1;
  pageSize = 6;

  get totalPages() {
    return Math.ceil(this.testimonials.length / this.pageSize);
  }

  get pagedTestimonials() {
    const pages = [];
    for (let i = 0; i < this.totalPages; i++) {
      pages.push(
        this.testimonials.slice(i * this.pageSize, (i + 1) * this.pageSize)
      );
    }
    return pages;
  }

  onScroll(event: Event) {
    const container = event.target as HTMLElement;
    const scrollLeft = container.scrollLeft;
    const width = container.offsetWidth;
    const newPage = Math.round(scrollLeft / width) + 1;
    if (this.page !== newPage) {
      this.page = newPage;
    }
  }

  scrollToPage(page: number, container: HTMLElement) {
    this.page = page;
    const width = container.offsetWidth;
    container.scrollTo({
      left: width * (page - 1),
      behavior: 'smooth',
    });
  }
}

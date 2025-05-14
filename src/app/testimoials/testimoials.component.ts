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
      text: 'Foodics restaurant RMS - cloud POS system is just perfect. It comes with more features than any other system. It looks beautiful, easy-to-use, with great customer support.',
      name: 'Homoud Al Homoudi',
      logo: 'assets/logos/7ribs.png',
      company: '7Ribs',
    },
    {
      text: 'We have tried many systems before but they did not fully meet our needs. Since adopting Foodics, we have found solutions for cost, inventory, and analytics.',
      name: 'Hussein Al Mousawi',
      logo: 'assets/logos/koobs.png',
      company: 'Koobs Cafe',
    },
    {
      text: "Very easy to use! It connects all activity centers/branches in one platform. We appreciate the efforts of the Foodics technical support's quick to respond.",
      name: 'Ahmad Omran',
      logo: 'assets/logos/mazaj.png',
      company: 'Mazaj Maghrebi',
    },
    {
      text: 'We extend our warmest gratitude to the Foodics company for their sincerity, professionalism, and technical support.',
      name: 'Youssef AlMokhtar AlJabri',
      logo: 'assets/logos/chefs.png',
      company: "Chef's Restaurant",
    },
    {
      text: 'Foodics cloud POS has everything we need. A good user interface and friendly navigation make it easy for people to course through it.',
      name: 'Anas Galmouss',
      logo: 'assets/logos/foodgate.png',
      company: 'Food Gate Co.',
    },
    {
      text: 'Foodics is excellent! It allows us to monitor and manage our branches efficiently. The after-sales service is fast and the team is responsive.',
      name: 'Muhammad Abu Shawarib',
      logo: 'assets/logos/shams.png',
      company: 'Shams',
    },
  ];
}

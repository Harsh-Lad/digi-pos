import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { RouterModule } from '@angular/router';
import { PartnerTimelineComponent } from '../partner-timeline/partner-timeline.component';
import { PartnerFaqComponent } from '../partner-faq/partner-faq.component';

@Component({
  selector: 'app-become-partner',
  imports: [CommonModule, TranslateModule, NavbarComponent, FooterComponent, ContactFormComponent, RouterModule, PartnerTimelineComponent, PartnerFaqComponent],
  templateUrl: './become-partner.component.html',
  styleUrl: './become-partner.component.css'
})
export class BecomePartnerComponent implements OnInit {
  
  ngOnInit(): void {
    // Scroll to top when component loads
    window.scrollTo(0, 0);
  }
}

import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { HeroComponent } from "../hero/hero.component";
import { MarqueeComponent } from "../marquee-slider/marquee-slider.component";
import { ImageMarqueeComponent } from "../image-marquee/image-marquee.component";
import { DigiPosSectionsComponent } from "../digi-pos-sections/digi-pos-sections.component";
import { OfficeSectionsComponent } from "../office-sections/office-sections.component";
import { IntegrationsMarqueeComponent } from "../integrations-marquee/integrations-marquee.component";
import { TestimonialsComponent } from "../testimoials/testimoials.component";
import { PlatformsComponent } from "../platforms/platforms.component";
import { FooterComponent } from "../footer/footer.component";
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent, 
    HeroComponent, 
    MarqueeComponent, 
    ImageMarqueeComponent, 
    ContactFormComponent, 
    DigiPosSectionsComponent, 
    OfficeSectionsComponent, 
    IntegrationsMarqueeComponent, 
    TestimonialsComponent, 
    PlatformsComponent, 
    FooterComponent,
    TranslateModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

})
export class HomeComponent {
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { HeroComponent } from "./hero/hero.component";
import { MarqueeComponent } from "./marquee-slider/marquee-slider.component";
import { ImageMarqueeComponent } from "./image-marquee/image-marquee.component";
import { DigiPosSectionsComponent } from "./digi-pos-sections/digi-pos-sections.component";
import { OfficeSectionsComponent } from "./office-sections/office-sections.component";
import { IntegrationsMarqueeComponent } from "./integrations-marquee/integrations-marquee.component";
import { TestimonialsComponent } from "./testimoials/testimoials.component";
import { PlatformsComponent } from "./platforms/platforms.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HeroComponent, MarqueeComponent, ImageMarqueeComponent, DigiPosSectionsComponent, OfficeSectionsComponent, IntegrationsMarqueeComponent, TestimonialsComponent, PlatformsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'digi-pos';
}

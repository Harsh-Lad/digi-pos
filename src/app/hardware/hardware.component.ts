import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hardware',
  templateUrl: './hardware.component.html',
  styleUrls: ['./hardware.component.css'],
  imports: [FooterComponent, ContactFormComponent, NavbarComponent, RouterLink],
})
export class HardwareComponent {
  constructor() {}
}

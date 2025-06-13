import { Component } from '@angular/core';
import { DemoFormComponent } from '../demo-form/demo-form.component';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { ContactFormComponent } from "../contact-form/contact-form.component";

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
  imports: [DemoFormComponent, NavbarComponent, FooterComponent, ContactFormComponent],
  standalone: true
})
export class DemoComponent {
  
}
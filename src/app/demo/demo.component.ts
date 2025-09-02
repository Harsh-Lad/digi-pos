import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { DemoFormComponent } from '../demo-form/demo-form.component';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
  imports: [DemoFormComponent, NavbarComponent, FooterComponent, TranslateModule],
  standalone: true
})
export class DemoComponent {
  
}
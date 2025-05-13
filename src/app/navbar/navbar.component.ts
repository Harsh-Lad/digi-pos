import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  standalone: true,
  imports: [NgIf, RouterLink],
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isMegaMenuOpen = false;

  toggleMegaMenu() {
    this.isMegaMenuOpen = !this.isMegaMenuOpen;
  }

  closeMegaMenu() {
    this.isMegaMenuOpen = false;
  }
}

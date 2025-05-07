import { Component, ElementRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { CommonModule, NgClass, NgIf, NgFor , NgStyle} from '@angular/common';
import { AboutDigiposComponent } from "./about-digipos/about-digipos.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, NgFor, NgStyle, NgClass, NgIf, AboutDigiposComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'digi-pos';

  // Properties for the interactive card effect
  x: number = 0;
  y: number = 0;
  isDragging: boolean = false;
  blurTarget: string | null = null;
  
  // Property for marquee animation control
  marqueePaused: boolean = false;

  // send clientelle images 
  clientelleImages = [
    { src: 'https://www.deliverect.com/images/deliverect_logo_black.svg', alt: 'Clientelle Image 1' },
    { src: 'https://www.deliverect.com/images/deliverect_logo_black.svg', alt: 'Clientelle Image 2' },
    { src: 'https://www.deliverect.com/images/deliverect_logo_black.svg', alt: 'Clientelle Image 3' },
    { src: 'https://www.deliverect.com/images/deliverect_logo_black.svg', alt: 'Clientelle Image 4' },
    { src: 'https://www.deliverect.com/images/deliverect_logo_black.svg', alt: 'Clientelle Image 5' },
  ];
  
  /**
   * Handles mouse down event on the card
   * @param event Mouse event
   * @param cardRef Reference to the card element
   */
  handleMouseDown(event: MouseEvent, cardRef: HTMLElement): void {
    this.isDragging = true;
    this.updateBeamPosition(event, cardRef);
  }
  
  /**
   * Handles mouse up event
   */
  handleMouseUp(): void {
    this.isDragging = false;
    // Clear blur target when mouse is released
    this.blurTarget = null;
  }
  
  /**
   * Handles image mouse down event
   * @param target The target to blur ('category' or 'hourly')
   * @param event Mouse event
   */
  handleImageMouseDown(target: string, event: MouseEvent): void {
    // Prevent propagation to parent elements
    event.stopPropagation();
    
    // Set blur target on mouse down
    this.blurTarget = target;
  }
  
  /**
   * Updates beam position based on mouse coordinates
   * @param event Mouse event
   * @param element Element reference
   */
  // Changed from private to public to make it accessible from the template
  public updateBeamPosition(event: MouseEvent, element: HTMLElement): void {
    // Get element boundaries
    const rect = element.getBoundingClientRect();
    
    // Calculate mouse position relative to the element
    this.x = event.clientX - rect.left;
    this.y = event.clientY - rect.top;
  }
}

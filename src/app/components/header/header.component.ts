import { CommonModule, ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [ CommonModule ]
})
export class HeaderComponent {
  isMenuOpen = false;

  constructor(private viewportScroller: ViewportScroller) {}
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  activeSection = '';

  scrollToSection(sectionId: string) {
    this.viewportScroller.scrollToAnchor(sectionId);
    this.activeSection = sectionId;
  }
  
}

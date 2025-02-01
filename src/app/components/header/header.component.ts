import { CommonModule, ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [ CommonModule ]
})
export class HeaderComponent {

  private startDate = new Date('2025-02-25T00:00:00'); // Fecha y hora de inicio del sorteo
  public days: number = 0;
  public hours: number = 0;
  public minutes: number = 0;
  public segundos: number = 0;

  private intervalId: any;
  isMenuOpen = false;
  constructor(private viewportScroller: ViewportScroller) {}
  ngOnInit() {
    this.updateCountdown();
    this.intervalId = setInterval(() => this.updateCountdown(), 1000); // Actualiza cada minuto
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  activeSection = '';

  scrollToSection(sectionId: string) {
    this.viewportScroller.scrollToAnchor(sectionId);
    this.activeSection = sectionId;
  }

private updateCountdown() {
  const now = new Date();
  const timeDifference = this.startDate.getTime() - now.getTime();

  if (timeDifference > 0) {
    this.days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    this.hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    this.segundos = Math.floor((timeDifference % (1000 * 60)) / 1000);
  } else {
    // El sorteo ha comenzado o ha terminado
    this.days = 0;
    this.hours = 0;
    this.minutes = 0;
    this.segundos = 0;
  }
}
}

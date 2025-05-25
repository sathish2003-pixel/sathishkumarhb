import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-progress',
  standalone: true,
  template: `<div class="scroll-progress-bar" [style.width.%]="progressWidth"></div>`,
  styles: []
})
export class ScrollProgressComponent {
  progressWidth = 0;

  @HostListener('window:scroll')
  onWindowScroll(): void {
    // Calculate how far the user has scrolled down the page
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    this.progressWidth = (scrollTop / scrollHeight) * 100;
  }
}
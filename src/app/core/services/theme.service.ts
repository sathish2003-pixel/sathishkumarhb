import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkTheme = new BehaviorSubject<boolean>(false);
  isDarkTheme = this.darkTheme.asObservable();

  constructor() {}

  initTheme(): void {
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
      this.setDarkTheme(savedTheme === 'dark');
    } else {
      // Use system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.setDarkTheme(prefersDark);
    }
    
    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      if (!localStorage.getItem('theme')) {
        this.setDarkTheme(e.matches);
      }
    });
  }

  setDarkTheme(isDark: boolean): void {
    // Save preference to localStorage
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    
    // Update theme state
    this.darkTheme.next(isDark);
    
    // Update body class
    if (isDark) {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
    } else {
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
    }
  }

  toggleTheme(): void {
    this.setDarkTheme(!this.darkTheme.value);
  }
}
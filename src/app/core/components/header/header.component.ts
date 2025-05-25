import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="header" [class.scrolled]="isScrolled">
      <div class="container">
        <div class="header-content">
          <a href="#home" class="logo">John.Dev</a>
          
          <nav class="desktop-nav d-none d-md-block">
            <ul>
              <li><a href="#home" [class.active]="activeSection === 'home'">Home</a></li>
              <li><a href="#about" [class.active]="activeSection === 'about'">About</a></li>
              <li><a href="#skills" [class.active]="activeSection === 'skills'">Skills</a></li>
              <li><a href="#experience" [class.active]="activeSection === 'experience'">Experience</a></li>
              <li><a href="#contact" [class.active]="activeSection === 'contact'">Contact</a></li>
              <li>
                <button class="theme-toggle" (click)="toggleTheme()" aria-label="Toggle theme">
                  <span *ngIf="isDarkTheme" class="theme-icon">🌞</span>
                  <span *ngIf="!isDarkTheme" class="theme-icon">🌙</span>
                </button>
              </li>
            </ul>
          </nav>
          
          <div class="mobile-nav-toggle d-md-none" (click)="toggleMobileNav()">
            <span [class.open]="isMobileNavOpen">☰</span>
          </div>
        </div>
      </div>
      
      <div class="mobile-nav d-md-none" [class.open]="isMobileNavOpen">
        <ul>
          <li><a href="#home" (click)="closeMobileNav()">Home</a></li>
          <li><a href="#about" (click)="closeMobileNav()">About</a></li>
          <li><a href="#skills" (click)="closeMobileNav()">Skills</a></li>
          <li><a href="#experience" (click)="closeMobileNav()">Experience</a></li>
          <li><a href="#contact" (click)="closeMobileNav()">Contact</a></li>
          <li>
            <button class="theme-toggle" (click)="toggleTheme()" aria-label="Toggle theme">
              <span *ngIf="isDarkTheme" class="theme-icon">🌞</span>
              <span *ngIf="!isDarkTheme" class="theme-icon">🌙</span>
            </button>
          </li>
        </ul>
      </div>
    </header>
  `,
  styles: [`
    .header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 1000;
      transition: all 0.3s ease;
      padding: 20px 0;
    }
    
    .header.scrolled {
      background-color: var(--background-light);
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      padding: 12px 0;
    }
    
    :host-context(.dark-theme) .header.scrolled {
      background-color: var(--background-dark);
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    }
    
    .header-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .logo {
      font-size: 1.8rem;
      font-weight: 700;
      color: var(--primary-color);
      text-decoration: none;
      transition: all 0.3s ease;
    }
    
    .logo:hover {
      transform: scale(1.05);
    }
    
    .desktop-nav ul {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
    }
    
    .desktop-nav li {
      margin-left: 30px;
    }
    
    .desktop-nav a {
      color: var(--text-dark);
      text-decoration: none;
      font-weight: 500;
      position: relative;
      padding-bottom: 5px;
      transition: all 0.3s ease;
    }
    
    :host-context(.dark-theme) .desktop-nav a {
      color: var(--text-light);
    }
    
    .desktop-nav a:hover, .desktop-nav a.active {
      color: var(--primary-color);
    }
    
    .desktop-nav a::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background-color: var(--primary-color);
      transition: width 0.3s ease;
    }
    
    .desktop-nav a:hover::after, .desktop-nav a.active::after {
      width: 100%;
    }
    
    .theme-toggle {
      background: none;
      border: none;
      cursor: pointer;
      font-size: 1.2rem;
      padding: 5px;
      border-radius: 50%;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .theme-toggle:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
    
    :host-context(.dark-theme) .theme-toggle:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
    
    .mobile-nav-toggle {
      font-size: 1.5rem;
      cursor: pointer;
      border: none;
      background: none;
      transition: all 0.3s ease;
    }
    
    .mobile-nav-toggle span {
      transition: transform 0.3s ease;
      display: inline-block;
    }
    
    .mobile-nav-toggle span.open {
      transform: rotate(90deg);
    }
    
    .mobile-nav {
      position: fixed;
      top: 70px;
      left: 0;
      width: 100%;
      background-color: var(--background-light);
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
      transform: translateY(-100%);
      opacity: 0;
      transition: all 0.3s ease;
      visibility: hidden;
      z-index: 999;
    }
    
    :host-context(.dark-theme) .mobile-nav {
      background-color: var(--background-dark);
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
    }
    
    .mobile-nav.open {
      transform: translateY(0);
      opacity: 1;
      visibility: visible;
    }
    
    .mobile-nav ul {
      list-style: none;
      padding: 20px;
      margin: 0;
    }
    
    .mobile-nav li {
      margin-bottom: 15px;
    }
    
    .mobile-nav a {
      color: var(--text-dark);
      text-decoration: none;
      font-weight: 500;
      font-size: 1.1rem;
      display: block;
      padding: 8px 0;
      transition: all 0.3s ease;
    }
    
    :host-context(.dark-theme) .mobile-nav a {
      color: var(--text-light);
    }
    
    .mobile-nav a:hover {
      color: var(--primary-color);
      transform: translateX(5px);
    }
  `]
})
export class HeaderComponent implements OnInit {
  isScrolled = false;
  isMobileNavOpen = false;
  isDarkTheme = false;
  activeSection = 'home';
  sections: string[] = ['home', 'about', 'skills', 'experience', 'contact'];

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.isDarkTheme.subscribe(isDark => {
      this.isDarkTheme = isDark;
    });
    
    // Initialize active section based on scroll position
    this.checkActiveSection();
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    // Check if page is scrolled to add background to header
    this.isScrolled = window.scrollY > 50;
    
    // Update active section based on scroll position
    this.checkActiveSection();
  }

  checkActiveSection(): void {
    const scrollPosition = window.scrollY + 200; // Add offset for better UX
    
    for (const section of this.sections) {
      const element = document.getElementById(section);
      if (element) {
        const top = element.offsetTop;
        const height = element.offsetHeight;
        
        if (scrollPosition >= top && scrollPosition < top + height) {
          this.activeSection = section;
          break;
        }
      }
    }
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  toggleMobileNav(): void {
    this.isMobileNavOpen = !this.isMobileNavOpen;
    
    // Prevent scrolling when mobile nav is open
    if (this.isMobileNavOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  closeMobileNav(): void {
    this.isMobileNavOpen = false;
    document.body.style.overflow = '';
  }
}
import { Component, OnInit, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ThemeService } from './core/services/theme.service';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { HomeComponent } from './features/home/home.component';
import { AboutComponent } from './features/about/about.component';
import { SkillsComponent } from './features/skills/skills.component';
import { ExperienceComponent } from './features/experience/experience.component';
import { ContactComponent } from './features/contact/contact.component';
import { ScrollProgressComponent } from './shared/components/scroll-progress/scroll-progress.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    ContactComponent,
    ScrollProgressComponent
  ],
  template: `
    <app-scroll-progress></app-scroll-progress>
    <app-header></app-header>
    
    <main>
      <app-home id="home"></app-home>
      <app-about id="about"></app-about>
      <app-skills id="skills"></app-skills>
      <app-experience id="experience"></app-experience>
      <app-contact id="contact"></app-contact>
    </main>
    
    <app-footer></app-footer>
  `,
  styles: [`
    main {
      overflow-x: hidden;
    }
  `]
})
export class AppComponent implements OnInit {
  @HostBinding('class') get themeClass(): string {
    return this.themeService.isDarkTheme ? 'dark-theme' : 'light-theme';
  }

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    // Initialize theme based on user preference
    this.themeService.initTheme();
    
    // Apply theme class to body
    document.body.classList.add(this.themeService.isDarkTheme ? 'dark-theme' : 'light-theme');
  }
}
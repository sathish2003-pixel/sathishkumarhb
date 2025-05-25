import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillCardComponent } from './skill-card/skill-card.component';

interface Skill {
  name: string;
  level: number;
  category: string;
  icon: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, SkillCardComponent],
  template: `
    <section id="skills" class="section skills-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h2 class="section-title" data-aos="fade-up">Skills & Expertise</h2>
            <p class="section-description text-center" data-aos="fade-up">
              My technical toolkit and areas of expertise
            </p>
          </div>
        </div>
        
        <div class="skills-filter" data-aos="fade-up">
          <button 
            class="filter-btn" 
            [class.active]="activeFilter === 'all'"
            (click)="filterSkills('all')">
            All
          </button>
          <button 
            class="filter-btn" 
            [class.active]="activeFilter === 'frontend'"
            (click)="filterSkills('frontend')">
            Frontend
          </button>
          <button 
            class="filter-btn" 
            [class.active]="activeFilter === 'backend'"
            (click)="filterSkills('backend')">
            Backend
          </button>
          <button 
            class="filter-btn" 
            [class.active]="activeFilter === 'tools'"
            (click)="filterSkills('tools')">
            Tools & DevOps
          </button>
        </div>
        
        <div class="row skills-grid">
          <div *ngFor="let skill of filteredSkills; let i = index" class="col-md-4 col-sm-6 skill-item" 
              data-aos="fade-up" [attr.data-aos-delay]="i * 50">
            <app-skill-card [skill]="skill"></app-skill-card>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .skills-section {
      background-color: white;
      position: relative;
    }
    
    :host-context(.dark-theme) .skills-section {
      background-color: var(--background-dark);
    }
    
    .section-description {
      max-width: 700px;
      margin: 0 auto calc(var(--spacing-unit) * 5);
    }
    
    .skills-filter {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: calc(var(--spacing-unit) * 2);
      margin-bottom: calc(var(--spacing-unit) * 5);
    }
    
    .filter-btn {
      background: none;
      border: 2px solid var(--primary-color);
      color: var(--primary-color);
      padding: 8px 20px;
      border-radius: 30px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    
    .filter-btn:hover {
      background-color: rgba(63, 81, 181, 0.1);
    }
    
    .filter-btn.active {
      background-color: var(--primary-color);
      color: white;
    }
    
    .skills-grid {
      margin-top: calc(var(--spacing-unit) * 3);
    }
    
    .skill-item {
      margin-bottom: calc(var(--spacing-unit) * 4);
    }
  `]
})
export class SkillsComponent {
  skills: Skill[] = [
    { name: 'Angular', level: 95, category: 'frontend', icon: '🅰️' },
    { name: 'TypeScript', level: 90, category: 'frontend', icon: '📝' },
    { name: 'JavaScript', level: 95, category: 'frontend', icon: '🟨' },
    { name: 'HTML5 & CSS3', level: 90, category: 'frontend', icon: '🎨' },
    { name: 'React', level: 80, category: 'frontend', icon: '⚛️' },
    { name: 'SASS/SCSS', level: 85, category: 'frontend', icon: '💅' },
    { name: 'Node.js', level: 85, category: 'backend', icon: '🟢' },
    { name: 'Express', level: 80, category: 'backend', icon: '🚂' },
    { name: 'MongoDB', level: 75, category: 'backend', icon: '🍃' },
    { name: 'PostgreSQL', level: 70, category: 'backend', icon: '🐘' },
    { name: 'RESTful APIs', level: 90, category: 'backend', icon: '🔄' },
    { name: 'GraphQL', level: 75, category: 'backend', icon: '⚡' },
    { name: 'Git', level: 90, category: 'tools', icon: '📊' },
    { name: 'Docker', level: 80, category: 'tools', icon: '🐳' },
    { name: 'CI/CD', level: 85, category: 'tools', icon: '🔄' },
    { name: 'AWS', level: 70, category: 'tools', icon: '☁️' },
    { name: 'Agile/Scrum', level: 85, category: 'tools', icon: '🔄' },
    { name: 'Jest/Jasmine', level: 80, category: 'tools', icon: '🧪' },
  ];

  filteredSkills: Skill[] = this.skills;
  activeFilter: string = 'all';

  filterSkills(category: string): void {
    this.activeFilter = category;
    
    if (category === 'all') {
      this.filteredSkills = this.skills;
    } else {
      this.filteredSkills = this.skills.filter(skill => skill.category === category);
    }
  }
}
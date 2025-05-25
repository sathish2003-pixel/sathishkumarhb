import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  level: number;
  category: string;
  icon: string;
}

@Component({
  selector: 'app-skill-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="skill-card">
      <div class="skill-icon">{{ skill.icon }}</div>
      <h3 class="skill-name">{{ skill.name }}</h3>
      <div class="skill-progress-container">
        <div class="skill-progress-bar" [style.width.%]="skill.level"></div>
        <span class="skill-level">{{ skill.level }}%</span>
      </div>
    </div>
  `,
  styles: [`
    .skill-card {
      background-color: white;
      padding: calc(var(--spacing-unit) * 3);
      border-radius: var(--border-radius);
      box-shadow: var(--shadow-sm);
      transition: all 0.3s ease;
      height: 100%;
    }
    
    :host-context(.dark-theme) .skill-card {
      background-color: #1e1e1e;
    }
    
    .skill-card:hover {
      transform: translateY(-5px);
      box-shadow: var(--shadow-md);
    }
    
    .skill-icon {
      font-size: 2.5rem;
      margin-bottom: calc(var(--spacing-unit) * 2);
    }
    
    .skill-name {
      font-size: 1.2rem;
      font-weight: 600;
      margin-bottom: calc(var(--spacing-unit) * 2);
    }
    
    .skill-progress-container {
      height: 8px;
      background-color: var(--background-light);
      border-radius: 4px;
      position: relative;
      overflow: hidden;
    }
    
    :host-context(.dark-theme) .skill-progress-container {
      background-color: #333;
    }
    
    .skill-progress-bar {
      height: 100%;
      background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
      border-radius: 4px;
      transition: width 1s ease-in-out;
    }
    
    .skill-level {
      position: absolute;
      top: -20px;
      right: 0;
      font-size: 0.8rem;
      font-weight: 600;
    }
  `]
})
export class SkillCardComponent {
  @Input() skill!: Skill;
}
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TimelineItem {
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

@Component({
  selector: 'app-timeline-item',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="timeline-item" [class.right]="index % 2 !== 0">
      <div class="timeline-marker"></div>
      <div class="timeline-content">
        <div class="timeline-date">{{ item.period }}</div>
        <h3 class="timeline-role">{{ item.role }}</h3>
        <h4 class="timeline-company">{{ item.company }}</h4>
        <p class="timeline-description">{{ item.description }}</p>
        <div class="timeline-achievements">
          <h5>Key Achievements:</h5>
          <ul>
            <li *ngFor="let achievement of item.achievements">{{ achievement }}</li>
          </ul>
        </div>
      </div>
      <div class="timeline-line" *ngIf="!isLast"></div>
    </div>
  `,
  styles: [`
    .timeline-item {
      position: relative;
      margin-bottom: calc(var(--spacing-unit) * 8);
      padding-left: calc(var(--spacing-unit) * 5);
    }
    
    @media (min-width: 768px) {
      .timeline-item {
        width: 50%;
        margin-left: 0;
        padding-left: 0;
        padding-right: calc(var(--spacing-unit) * 5);
      }
      
      .timeline-item.right {
        margin-left: 50%;
        padding-left: calc(var(--spacing-unit) * 5);
        padding-right: 0;
      }
    }
    
    .timeline-marker {
      position: absolute;
      top: 0;
      width: 16px;
      height: 16px;
      background-color: var(--primary-color);
      border-radius: 50%;
      z-index: 1;
    }
    
    @media (min-width: 768px) {
      .timeline-marker {
        left: calc(100% - 8px);
      }
      
      .timeline-item.right .timeline-marker {
        left: -8px;
      }
    }
    
    @media (max-width: 767px) {
      .timeline-marker {
        left: -8px;
      }
    }
    
    .timeline-line {
      position: absolute;
      top: 16px;
      bottom: -45px;
      width: 2px;
      background-color: var(--primary-light);
    }
    
    @media (min-width: 768px) {
      .timeline-line {
        left: 100%;
      }
      
      .timeline-item.right .timeline-line {
        left: 0;
      }
    }
    
    @media (max-width: 767px) {
      .timeline-line {
        left: 0;
      }
    }
    
    .timeline-content {
      background-color: white;
      padding: calc(var(--spacing-unit) * 3);
      border-radius: var(--border-radius);
      box-shadow: var(--shadow-sm);
      transition: all 0.3s ease;
    }
    
    :host-context(.dark-theme) .timeline-content {
      background-color: #1e1e1e;
    }
    
    .timeline-content:hover {
      transform: translateY(-5px);
      box-shadow: var(--shadow-md);
    }
    
    .timeline-date {
      display: inline-block;
      padding: 5px 10px;
      background-color: var(--primary-light);
      color: white;
      border-radius: 20px;
      font-size: 0.8rem;
      margin-bottom: calc(var(--spacing-unit) * 2);
    }
    
    .timeline-role {
      font-size: 1.3rem;
      font-weight: 600;
      margin-bottom: var(--spacing-unit);
    }
    
    .timeline-company {
      font-size: 1.1rem;
      font-weight: 500;
      color: var(--secondary-color);
      margin-bottom: calc(var(--spacing-unit) * 2);
    }
    
    .timeline-description {
      margin-bottom: calc(var(--spacing-unit) * 2);
      line-height: 1.6;
    }
    
    .timeline-achievements h5 {
      font-size: 1rem;
      font-weight: 600;
      margin-bottom: var(--spacing-unit);
    }
    
    .timeline-achievements ul {
      padding-left: 20px;
    }
    
    .timeline-achievements li {
      margin-bottom: var(--spacing-unit);
      line-height: 1.5;
    }
  `]
})
export class TimelineItemComponent {
  @Input() item!: TimelineItem;
  @Input() index!: number;
  @Input() isLast: boolean = false;
}
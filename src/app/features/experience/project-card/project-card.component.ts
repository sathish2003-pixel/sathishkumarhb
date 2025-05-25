import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
}

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="project-card">
      <div class="project-image-container">
        <img [src]="project.image" [alt]="project.title" class="project-image" />
        <div class="project-overlay">
          <div class="project-links">
            <a *ngIf="project.demoUrl" [href]="project.demoUrl" target="_blank" class="project-link">
              Live Demo
            </a>
            <a *ngIf="project.githubUrl" [href]="project.githubUrl" target="_blank" class="project-link">
              GitHub
            </a>
          </div>
        </div>
      </div>
      <div class="project-content">
        <h3 class="project-title">{{ project.title }}</h3>
        <p class="project-description">{{ project.description }}</p>
        <div class="project-technologies">
          <span *ngFor="let tech of project.technologies" class="tech-tag">{{ tech }}</span>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .project-card {
      background-color: white;
      border-radius: var(--border-radius);
      overflow: hidden;
      box-shadow: var(--shadow-sm);
      height: 100%;
      transition: all 0.3s ease;
    }
    
    :host-context(.dark-theme) .project-card {
      background-color: #1e1e1e;
    }
    
    .project-card:hover {
      transform: translateY(-5px);
      box-shadow: var(--shadow-md);
    }
    
    .project-image-container {
      position: relative;
      overflow: hidden;
      height: 200px;
    }
    
    .project-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }
    
    .project-card:hover .project-image {
      transform: scale(1.1);
    }
    
    .project-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.7);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    
    .project-card:hover .project-overlay {
      opacity: 1;
    }
    
    .project-links {
      display: flex;
      gap: calc(var(--spacing-unit) * 2);
    }
    
    .project-link {
      display: inline-block;
      padding: 8px 16px;
      background-color: var(--primary-color);
      color: white;
      text-decoration: none;
      border-radius: 20px;
      font-size: 0.9rem;
      font-weight: 500;
      transition: all 0.3s ease;
    }
    
    .project-link:hover {
      background-color: var(--primary-dark);
      transform: translateY(-2px);
    }
    
    .project-content {
      padding: calc(var(--spacing-unit) * 3);
    }
    
    .project-title {
      font-size: 1.3rem;
      font-weight: 600;
      margin-bottom: calc(var(--spacing-unit) * 2);
    }
    
    .project-description {
      margin-bottom: calc(var(--spacing-unit) * 3);
      line-height: 1.6;
    }
    
    .project-technologies {
      display: flex;
      flex-wrap: wrap;
      gap: var(--spacing-unit);
    }
    
    .tech-tag {
      display: inline-block;
      padding: 4px 10px;
      background-color: rgba(63, 81, 181, 0.1);
      color: var(--primary-color);
      border-radius: 20px;
      font-size: 0.8rem;
      font-weight: 500;
    }
    
    :host-context(.dark-theme) .tech-tag {
      background-color: rgba(63, 81, 181, 0.2);
    }
  `]
})
export class ProjectCardComponent {
  @Input() project!: Project;
}
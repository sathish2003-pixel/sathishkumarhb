import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineItemComponent } from './timeline-item/timeline-item.component';
import { ProjectCardComponent } from './project-card/project-card.component';

interface TimelineItem {
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, TimelineItemComponent, ProjectCardComponent],
  template: `
    <section id="experience" class="section experience-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h2 class="section-title" data-aos="fade-up">Work Experience</h2>
          </div>
        </div>
        
        <div class="timeline" data-aos="fade-up">
          <app-timeline-item 
            *ngFor="let item of timelineItems; let i = index" 
            [item]="item" 
            [index]="i"
            [isLast]="i === timelineItems.length - 1">
          </app-timeline-item>
        </div>
        
        <div class="row mt-5">
          <div class="col-lg-12">
            <h2 class="section-title projects-title" data-aos="fade-up">Featured Projects</h2>
          </div>
        </div>
        
        <div class="row projects-grid">
          <div *ngFor="let project of projects; let i = index" class="col-md-6 col-lg-4 mb-4" 
               data-aos="fade-up" [attr.data-aos-delay]="i * 100">
            <app-project-card [project]="project"></app-project-card>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .experience-section {
      background-color: var(--background-light);
    }
    
    :host-context(.dark-theme) .experience-section {
      background-color: var(--background-dark);
    }
    
    .timeline {
      position: relative;
      margin-top: calc(var(--spacing-unit) * 6);
    }
    
    .projects-title {
      margin-top: calc(var(--spacing-unit) * 8);
    }
    
    .projects-grid {
      margin-top: calc(var(--spacing-unit) * 5);
    }
  `]
})
export class ExperienceComponent {
  timelineItems: TimelineItem[] = [
    {
      role: 'Senior Frontend Developer',
      company: 'Tech Innovations Inc.',
      period: 'Jan 2021 - Present',
      description: 'Leading the frontend development team, responsible for architecture decisions and implementing best practices.',
      achievements: [
        'Redesigned the company\'s flagship product, resulting in a 40% increase in user engagement',
        'Implemented CI/CD pipeline reducing deployment time by 60%',
        'Mentored junior developers and conducted code reviews'
      ]
    },
    {
      role: 'Frontend Developer',
      company: 'Digital Solutions Co.',
      period: 'Mar 2018 - Dec 2020',
      description: 'Worked on developing and maintaining multiple web applications using Angular and React.',
      achievements: [
        'Developed a real-time dashboard that increased operational efficiency by 25%',
        'Implemented responsive design principles, improving mobile user experience',
        'Reduced bundle size by 30% through code optimization techniques'
      ]
    },
    {
      role: 'Junior Web Developer',
      company: 'WebCraft Studios',
      period: 'Jun 2016 - Feb 2018',
      description: 'Started as an intern and was promoted to a full-time position. Focused on front-end development with JavaScript and CSS.',
      achievements: [
        'Built interactive prototypes for client presentations',
        'Assisted in the development of the company\'s component library',
        'Contributed to over 15 successful client projects'
      ]
    }
  ];
  
  projects: Project[] = [
    {
      title: 'E-Commerce Dashboard',
      description: 'A comprehensive admin dashboard for e-commerce platforms with real-time analytics, inventory management, and order processing.',
      technologies: ['Angular', 'RxJS', 'Chart.js', 'Firebase'],
      image: 'https://images.pexels.com/photos/6956183/pexels-photo-6956183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      demoUrl: 'https://example.com/demo',
      githubUrl: 'https://github.com/example/project'
    },
    {
      title: 'Task Management App',
      description: 'A productivity application for teams to manage projects, assign tasks, and track progress with customizable workflows.',
      technologies: ['React', 'Redux', 'Node.js', 'MongoDB'],
      image: 'https://images.pexels.com/photos/6804595/pexels-photo-6804595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      demoUrl: 'https://example.com/demo',
      githubUrl: 'https://github.com/example/project'
    },
    {
      title: 'Health Tracking Platform',
      description: 'A wellness application that helps users track fitness goals, nutrition, and sleep patterns with personalized insights.',
      technologies: ['Angular', 'TypeScript', 'Express', 'PostgreSQL'],
      image: 'https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      demoUrl: 'https://example.com/demo',
      githubUrl: 'https://github.com/example/project'
    }
  ];
}
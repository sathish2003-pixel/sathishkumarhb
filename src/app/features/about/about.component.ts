import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="section about-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h2 class="section-title" data-aos="fade-up">About Me</h2>
          </div>
        </div>
        
        <div class="row">
          <div class="col-lg-5" data-aos="fade-right">
            <div class="about-img-container">
              <img src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                   alt="Professional working environment" 
                   class="about-img" />
            </div>
          </div>
          
          <div class="col-lg-7" data-aos="fade-left">
            <div class="about-content">
              <h3 class="about-subtitle">Professional Software Engineer</h3>
              <p class="about-text">
                I'm a passionate software engineer with over 5 years of experience in building high-quality web applications. 
                My journey in software development began with a curiosity for creating digital experiences that solve real-world problems.
              </p>
              <p class="about-text">
                Specializing in modern JavaScript frameworks like Angular, React, and Node.js, I bring a holistic approach to development 
                that emphasizes performance, accessibility, and user experience. I believe in writing clean, maintainable code that stands 
                the test of time and adapts to changing requirements.
              </p>
              
              <div class="about-info">
                <div class="info-item">
                  <h4>Name:</h4>
                  <p>John Doe</p>
                </div>
                <div class="info-item">
                  <h4>Email:</h4>
                  <p>john&#64;example.com</p>
                </div>
                <div class="info-item">
                  <h4>Location:</h4>
                  <p>San Francisco, CA</p>
                </div>
                <div class="info-item">
                  <h4>Availability:</h4>
                  <p>Full-time</p>
                </div>
              </div>
              
              <div class="about-cta">
                <a href="assets/resume.pdf" class="btn btn-primary" download>
                  Download Resume
                </a>
                <a href="#skills" class="btn btn-outline-secondary ms-3">
                  My Skills
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div class="row mt-5">
          <div class="col-lg-12">
            <div class="achievements" data-aos="fade-up">
              <h3 class="achievements-title">Key Achievements</h3>
              <div class="row">
                <div class="col-md-4" data-aos="fade-up" data-aos-delay="100">
                  <div class="achievement-card">
                    <div class="achievement-icon">🏆</div>
                    <h4>Lead Developer</h4>
                    <p>Led a team of 5 developers to deliver a critical project under tight deadlines</p>
                  </div>
                </div>
                <div class="col-md-4" data-aos="fade-up" data-aos-delay="200">
                  <div class="achievement-card">
                    <div class="achievement-icon">🚀</div>
                    <h4>Performance Optimization</h4>
                    <p>Improved application load time by 60% through advanced optimization techniques</p>
                  </div>
                </div>
                <div class="col-md-4" data-aos="fade-up" data-aos-delay="300">
                  <div class="achievement-card">
                    <div class="achievement-icon">🎓</div>
                    <h4>Certified Expert</h4>
                    <p>Google Cloud Certified Professional and AWS Solutions Architect</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about-section {
      background-color: var(--background-light);
      position: relative;
      overflow: hidden;
    }
    
    :host-context(.dark-theme) .about-section {
      background-color: var(--background-dark);
    }
    
    .about-section::before {
      content: '';
      position: absolute;
      top: -100px;
      right: -100px;
      width: 300px;
      height: 300px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(63, 81, 181, 0.1) 0%, rgba(63, 81, 181, 0) 70%);
      z-index: 0;
    }
    
    .about-img-container {
      position: relative;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: var(--shadow-md);
    }
    
    .about-img {
      width: 100%;
      height: auto;
      transition: transform 0.3s ease;
    }
    
    .about-img-container:hover .about-img {
      transform: scale(1.05);
    }
    
    .about-content {
      padding: 0 0 0 calc(var(--spacing-unit) * 3);
    }
    
    @media (max-width: 991px) {
      .about-content {
        padding: calc(var(--spacing-unit) * 4) 0 0 0;
      }
    }
    
    .about-subtitle {
      color: var(--primary-color);
      margin-bottom: calc(var(--spacing-unit) * 2);
      font-weight: 600;
    }
    
    .about-text {
      margin-bottom: calc(var(--spacing-unit) * 2);
      line-height: 1.7;
    }
    
    .about-info {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: calc(var(--spacing-unit) * 3);
      margin: calc(var(--spacing-unit) * 4) 0;
    }
    
    .info-item h4 {
      font-size: 1.1rem;
      font-weight: 600;
      margin-bottom: var(--spacing-unit);
      color: var(--primary-color);
    }
    
    .info-item p {
      margin: 0;
    }
    
    .about-cta {
      margin-top: calc(var(--spacing-unit) * 4);
    }
    
    .achievements {
      margin-top: calc(var(--spacing-unit) * 8);
    }
    
    .achievements-title {
      text-align: center;
      margin-bottom: calc(var(--spacing-unit) * 5);
      position: relative;
    }
    
    .achievements-title::after {
      content: '';
      position: absolute;
      bottom: -15px;
      left: 50%;
      transform: translateX(-50%);
      width: 50px;
      height: 3px;
      background-color: var(--primary-color);
    }
    
    .achievement-card {
      background-color: white;
      padding: calc(var(--spacing-unit) * 3);
      border-radius: var(--border-radius);
      box-shadow: var(--shadow-sm);
      height: 100%;
      transition: all 0.3s ease;
    }
    
    :host-context(.dark-theme) .achievement-card {
      background-color: #1e1e1e;
    }
    
    .achievement-card:hover {
      transform: translateY(-5px);
      box-shadow: var(--shadow-md);
    }
    
    .achievement-icon {
      font-size: 2.5rem;
      margin-bottom: calc(var(--spacing-unit) * 2);
    }
    
    .achievement-card h4 {
      font-weight: 600;
      margin-bottom: calc(var(--spacing-unit) * 1.5);
    }
    
    .achievement-card p {
      margin: 0;
      line-height: 1.6;
    }
  `]
})
export class AboutComponent {}
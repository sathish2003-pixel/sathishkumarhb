import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h3 class="footer-logo">John.Dev</h3>
            <p class="footer-tagline">Building the future, one line of code at a time.</p>
          </div>
          <div class="col-md-6">
            <div class="social-links">
              <a href="https://github.com" target="_blank" aria-label="GitHub">
                <i class="bi bi-github"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
                <i class="bi bi-linkedin"></i>
              </a>
              <a href="https://twitter.com" target="_blank" aria-label="Twitter">
                <i class="bi bi-twitter"></i>
              </a>
              <a href="mailto:john@example.com" aria-label="Email">
                <i class="bi bi-envelope"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; {{currentYear}} Sathish Kumar. All rights reserved.</p>
          <p class="credit">Designed & Built with Angular</p>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background-color: var(--primary-dark);
      color: var(--text-light);
      padding: calc(var(--spacing-unit) * 8) 0 calc(var(--spacing-unit) * 4);
    }
    
    .footer-logo {
      font-size: 1.8rem;
      font-weight: 700;
      margin-bottom: var(--spacing-unit);
    }
    
    .footer-tagline {
      font-size: 1rem;
      opacity: 0.8;
      margin-bottom: calc(var(--spacing-unit) * 3);
    }
    
    .social-links {
      display: flex;
      justify-content: flex-end;
      gap: calc(var(--spacing-unit) * 2);
    }
    
    @media (max-width: 767px) {
      .social-links {
        justify-content: flex-start;
        margin-top: calc(var(--spacing-unit) * 3);
      }
    }
    
    .social-links a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: rgba(255, 255, 255, 0.1);
      color: var(--text-light);
      text-decoration: none;
      transition: all 0.3s ease;
    }
    
    .social-links a:hover {
      background-color: var(--secondary-color);
      transform: translateY(-3px);
    }
    
    .footer-bottom {
      margin-top: calc(var(--spacing-unit) * 5);
      padding-top: calc(var(--spacing-unit) * 3);
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: var(--spacing-unit);
    }
    
    .footer-bottom p {
      margin: 0;
      font-size: 0.9rem;
      opacity: 0.8;
    }
    
    .credit {
      font-style: italic;
    }
    
    @media (max-width: 576px) {
      .footer-bottom {
        flex-direction: column;
        align-items: center;
        text-align: center;
      }
    }
  `]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
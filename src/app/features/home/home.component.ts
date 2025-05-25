import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxTypedJsModule } from 'ngx-typed-js';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgxTypedJsModule],
  template: `
    <section id="home" class="section home-section">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 home-content" data-aos="fade-right">
            <div class="greeting">Hello, I'm</div>
            <h1 class="name">Sathish Kumar</h1>
            <div class="typing-container">
              <ngx-typed-js [strings]="typedStrings" [shuffle]="false" [loop]="true" [backDelay]="1500" [typeSpeed]="70" [backSpeed]="50">
                <span class="typing">I am a <span class="typing-text"></span></span>
              </ngx-typed-js>
            </div>
            <p class="intro-text">
              Passionate software engineer specializing in creating elegant solutions to complex problems.
              With expertise in modern web technologies and a focus on user experience.
            </p>
            <div class="cta-buttons">
              <a href="#portfolio" class="btn btn-primary me-3">View Portfolio</a>
              <a href="#contact" class="btn btn-outline-secondary">Get In Touch</a>
            </div>
          </div>
          <div class="col-lg-6 home-image" data-aos="fade-left" data-aos-delay="200">
            <div class="image-container">
              <img src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                   alt="Professional headshot" 
                   class="profile-image" />
            </div>
          </div>
        </div>
      </div>
      <div class="scroll-down">
        <a href="#about" aria-label="Scroll to About section">
          <div class="mouse">
            <div class="wheel"></div>
          </div>
          <div class="arrow">
            <span></span>
            <span></span>
          </div>
        </a>
      </div>
    </section>
  `,
  styles: [`
    .home-section {
      position: relative;
      min-height: 100vh;
      display: flex;
      align-items: center;
      padding-top: 80px;
    }
    
    .greeting {
      font-size: 1.5rem;
      margin-bottom: var(--spacing-unit);
      color: var(--primary-color);
      font-weight: 500;
    }
    
    .name {
      font-size: clamp(2.5rem, 8vw, 4rem);
      font-weight: 800;
      margin-bottom: calc(var(--spacing-unit) * 2);
      background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }
    
    .typing-container {
      margin-bottom: calc(var(--spacing-unit) * 3);
    }
    
    .typing {
      font-size: 1.5rem;
      font-weight: 600;
    }
    
    .typing-text {
      color: var(--secondary-color);
    }
    
    .intro-text {
      font-size: 1.1rem;
      margin-bottom: calc(var(--spacing-unit) * 4);
      max-width: 500px;
      line-height: 1.6;
    }
    
    .cta-buttons {
      margin-bottom: calc(var(--spacing-unit) * 5);
    }
    
    .home-image {
      display: flex;
      justify-content: center;
    }
    
    .image-container {
      position: relative;
      width: 100%;
      max-width: 400px;
      border-radius: 20px;
      overflow: hidden;
      box-shadow: var(--shadow-lg);
    }
    
    .image-container::before {
      content: '';
      position: absolute;
      top: -10px;
      left: -10px;
      right: 10px;
      bottom: 10px;
      border: 3px solid var(--primary-color);
      border-radius: 20px;
      z-index: -1;
      transition: all 0.3s ease;
    }
    
    .image-container:hover::before {
      top: -15px;
      left: -15px;
      right: 15px;
      bottom: 15px;
    }
    
    .profile-image {
      width: 100%;
      height: auto;
      display: block;
      transition: all 0.3s ease;
    }
    
    .image-container:hover .profile-image {
      transform: scale(1.03);
    }
    
    /* Scroll down indicator */
    .scroll-down {
      position: absolute;
      bottom: 30px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    
    .mouse {
      width: 26px;
      height: 40px;
      border: 2px solid currentColor;
      border-radius: 20px;
      display: flex;
      justify-content: center;
      padding-top: 7px;
      opacity: 0.6;
    }
    
    .wheel {
      width: 3px;
      height: 8px;
      background-color: currentColor;
      border-radius: 3px;
      animation: scroll 1.5s infinite;
    }
    
    .arrow {
      margin-top: 5px;
    }
    
    .arrow span {
      display: block;
      width: 10px;
      height: 10px;
      border-bottom: 2px solid currentColor;
      border-right: 2px solid currentColor;
      transform: rotate(45deg);
      margin: -5px;
      animation: arrow 1.5s infinite;
      opacity: 0.6;
    }
    
    .arrow span:nth-child(2) {
      animation-delay: 0.2s;
    }
    
    @keyframes scroll {
      0% {
        opacity: 1;
        transform: translateY(0);
      }
      100% {
        opacity: 0;
        transform: translateY(10px);
      }
    }
    
    @keyframes arrow {
      0% {
        opacity: 0;
      }
      50% {
        opacity: 0.6;
      }
      100% {
        opacity: 0;
      }
    }
    
    @media (max-width: 991px) {
      .home-image {
        margin-top: calc(var(--spacing-unit) * 5);
      }
    }
  `]
})
export class HomeComponent implements OnInit {
  typedStrings: string[] = [
    'Software Engineer',
    'Frontend Developer',
    'UI/UX Enthusiast',
    'Problem Solver'
  ];

  ngOnInit(): void {
    // Component initialization
  }
}
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <section id="contact" class="section contact-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h2 class="section-title" data-aos="fade-up">Get In Touch</h2>
            <p class="section-description text-center" data-aos="fade-up">
              Have a project in mind or want to chat? Feel free to reach out!
            </p>
          </div>
        </div>
        
        <div class="row mt-5">
          <div class="col-lg-5" data-aos="fade-right">
            <div class="contact-info">
              <div class="contact-item">
                <div class="contact-icon">📧</div>
                <div class="contact-details">
                  <h3>Email</h3>
                  <p>john&#64;example.com</p>
                </div>
              </div>
              
              <div class="contact-item">
                <div class="contact-icon">📱</div>
                <div class="contact-details">
                  <h3>Phone</h3>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div class="contact-item">
                <div class="contact-icon">📍</div>
                <div class="contact-details">
                  <h3>Location</h3>
                  <p>San Francisco, CA</p>
                </div>
              </div>
              
              <div class="social-links">
                <a href="https://github.com" target="_blank" class="social-link" aria-label="GitHub">
                  <i class="bi bi-github"></i>
                </a>
                <a href="https://linkedin.com" target="_blank" class="social-link" aria-label="LinkedIn">
                  <i class="bi bi-linkedin"></i>
                </a>
                <a href="https://twitter.com" target="_blank" class="social-link" aria-label="Twitter">
                  <i class="bi bi-twitter"></i>
                </a>
              </div>
            </div>
          </div>
          
          <div class="col-lg-7" data-aos="fade-left">
            <div class="contact-form-container">
              <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="contact-form">
                <div class="alert alert-success" *ngIf="submitted && success">
                  Your message has been sent successfully!
                </div>
                
                <div class="alert alert-danger" *ngIf="submitted && !success">
                  There was an error sending your message. Please try again.
                </div>
                
                <div class="form-group">
                  <label for="name">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    formControlName="name" 
                    class="form-control" 
                    [class.is-invalid]="formControls['name'].invalid && (formControls['name'].dirty || formControls['name'].touched)"
                  />
                  <div class="invalid-feedback" *ngIf="formControls['name'].errors?.['required']">
                    Name is required.
                  </div>
                </div>
                
                <div class="form-group">
                  <label for="email">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    formControlName="email" 
                    class="form-control"
                    [class.is-invalid]="formControls['email'].invalid && (formControls['email'].dirty || formControls['email'].touched)"
                  />
                  <div class="invalid-feedback" *ngIf="formControls['email'].errors?.['required']">
                    Email is required.
                  </div>
                  <div class="invalid-feedback" *ngIf="formControls['email'].errors?.['email']">
                    Please enter a valid email address.
                  </div>
                </div>
                
                <div class="form-group">
                  <label for="subject">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    formControlName="subject" 
                    class="form-control"
                    [class.is-invalid]="formControls['subject'].invalid && (formControls['subject'].dirty || formControls['subject'].touched)"
                  />
                  <div class="invalid-feedback" *ngIf="formControls['subject'].errors?.['required']">
                    Subject is required.
                  </div>
                </div>
                
                <div class="form-group">
                  <label for="message">Message</label>
                  <textarea 
                    id="message" 
                    formControlName="message" 
                    class="form-control" 
                    rows="5"
                    [class.is-invalid]="formControls['message'].invalid && (formControls['message'].dirty || formControls['message'].touched)"
                  ></textarea>
                  <div class="invalid-feedback" *ngIf="formControls['message'].errors?.['required']">
                    Message is required.
                  </div>
                </div>
                
                <button type="submit" class="btn btn-primary submit-btn" [disabled]="contactForm.invalid || submitting">
                  <span *ngIf="!submitting">Send Message</span>
                  <span *ngIf="submitting">Sending...</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact-section {
      background-color: white;
    }
    
    :host-context(.dark-theme) .contact-section {
      background-color: var(--background-dark);
    }
    
    .section-description {
      max-width: 700px;
      margin: 0 auto calc(var(--spacing-unit) * 5);
    }
    
    .contact-info {
      padding: calc(var(--spacing-unit) * 3);
      background-color: var(--primary-color);
      color: white;
      border-radius: var(--border-radius);
      box-shadow: var(--shadow-md);
    }
    
    .contact-item {
      display: flex;
      align-items: flex-start;
      margin-bottom: calc(var(--spacing-unit) * 4);
    }
    
    .contact-icon {
      font-size: 1.8rem;
      margin-right: calc(var(--spacing-unit) * 2);
    }
    
    .contact-details h3 {
      font-size: 1.2rem;
      font-weight: 600;
      margin-bottom: var(--spacing-unit);
    }
    
    .contact-details p {
      margin: 0;
      font-size: 1rem;
    }
    
    .social-links {
      display: flex;
      gap: calc(var(--spacing-unit) * 2);
      margin-top: calc(var(--spacing-unit) * 4);
    }
    
    .social-link {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: rgba(255, 255, 255, 0.2);
      color: white;
      text-decoration: none;
      transition: all 0.3s ease;
    }
    
    .social-link:hover {
      background-color: white;
      color: var(--primary-color);
      transform: translateY(-3px);
    }
    
    .contact-form-container {
      background-color: white;
      padding: calc(var(--spacing-unit) * 4);
      border-radius: var(--border-radius);
      box-shadow: var(--shadow-md);
    }
    
    :host-context(.dark-theme) .contact-form-container {
      background-color: #1e1e1e;
    }
    
    .form-group {
      margin-bottom: calc(var(--spacing-unit) * 3);
    }
    
    label {
      display: block;
      margin-bottom: var(--spacing-unit);
      font-weight: 500;
    }
    
    .form-control {
      width: 100%;
      padding: 10px 15px;
      border: 1px solid #ced4da;
      border-radius: var(--border-radius);
      transition: border-color 0.3s ease, box-shadow 0.3s ease;
    }
    
    :host-context(.dark-theme) .form-control {
      background-color: #333;
      border-color: #444;
      color: var(--text-light);
    }
    
    .form-control:focus {
      border-color: var(--primary-color);
      outline: none;
      box-shadow: 0 0 0 3px rgba(63, 81, 181, 0.25);
    }
    
    .form-control.is-invalid {
      border-color: var(--error-color);
    }
    
    .invalid-feedback {
      color: var(--error-color);
      font-size: 0.85rem;
      margin-top: 5px;
    }
    
    .submit-btn {
      padding: 10px 25px;
      font-weight: 500;
      width: 100%;
      margin-top: calc(var(--spacing-unit) * 2);
    }
    
    .alert {
      padding: 12px;
      margin-bottom: calc(var(--spacing-unit) * 3);
      border-radius: var(--border-radius);
    }
    
    .alert-success {
      background-color: rgba(76, 175, 80, 0.2);
      color: var(--success-color);
      border: 1px solid rgba(76, 175, 80, 0.3);
    }
    
    .alert-danger {
      background-color: rgba(244, 67, 54, 0.2);
      color: var(--error-color);
      border: 1px solid rgba(244, 67, 54, 0.3);
    }
    
    @media (max-width: 991px) {
      .contact-info {
        margin-bottom: calc(var(--spacing-unit) * 4);
      }
    }
  `]
})
export class ContactComponent {
  contactForm: FormGroup;
  submitting = false;
  submitted = false;
  success = false;
  
  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }
  
  get formControls() {
    return this.contactForm.controls;
  }
  
  onSubmit(): void {
    this.submitted = true;
    
    if (this.contactForm.invalid) {
      return;
    }
    
    this.submitting = true;
    
    // Simulate API call
    setTimeout(() => {
      this.submitting = false;
      this.success = true;
      
      // Reset form after successful submission
      this.contactForm.reset();
      
      // Reset submission status after 5 seconds
      setTimeout(() => {
        this.submitted = false;
      }, 5000);
    }, 1500);
  }
}
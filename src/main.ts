declare const AOS: any;


import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { APP_INITIALIZER } from '@angular/core';
import { AppRoutes } from './app/app.routes';

function initializeAOS() {
  return () => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true
    });
  };
}

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(AppRoutes),
    provideAnimations(),
    {
      provide: APP_INITIALIZER,
      useFactory: initializeAOS,
      multi: true
    }
  ]
}).catch(err => console.error(err));

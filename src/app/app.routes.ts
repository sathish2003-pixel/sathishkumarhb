import { Routes } from '@angular/router';

export const AppRoutes: Routes = [
  // We'll use fragment-based navigation instead of route-based
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', redirectTo: '/' }
];
import { RouterModule, Routes } from '@angular/router';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';


// AuthGuard implementation
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // Check if user is logged in (using localStorage for simplicity)
    const isLoggedIn = localStorage.getItem('userLoggedIn') === 'true';

    if (isLoggedIn) {
      return true; // Allow access to the route
    } else {
      // Store the attempted URL for redirecting after login
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
      return false; // Deny access and redirect to login page
    }
  }
}

// Define routes
export const routes: Routes = [
  { path: 'properties', component: PropertyListComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
  { path: '**', redirectTo: '/home' }, // Wildcard route (404 redirect)
];

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const isLoggedIn = localStorage.getItem('userLoggedIn') === 'true';

    if (isLoggedIn) {
      return true;
    } else {
      // Redirect to login and preserve the original URL
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
      return false;
    }
  }
}
// This code defines an Angular AuthGuard that checks if a user is logged in before allowing access to certain routes. If the user is not logged in, they are redirected to the login page with the original URL preserved as a query parameter.
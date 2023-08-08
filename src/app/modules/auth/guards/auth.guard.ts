import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Injectable } from '@angular/core';
import { ErrorService } from 'src/app/shared/services/error.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private errorService: ErrorService,
    private router: Router
  ) {}

  isLogged!: boolean;

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (route.routeConfig?.path === 'login') {
      this.isLogged = !!localStorage.getItem('token');
      if (this.isLogged) {
        this.errorService.err$$.next('You are already logged in !');
        this.router.navigate(['/']);
      }
    }

    if (route.routeConfig?.path === 'register') {
      this.isLogged = !!localStorage.getItem('token');
      if (this.isLogged) {
        this.errorService.err$$.next(
          'You are already registered and logged in !'
        );
        this.router.navigate(['/']);
      }
    }

    if (route.routeConfig?.path === 'logout') {
      this.isLogged = !!localStorage.getItem('token');
      if (!this.isLogged) {
        this.router.navigate(['/auth/login']);
      }
    }

    if (route.routeConfig?.path === 'profile') {
      this.isLogged = !!localStorage.getItem('token');
      if (!this.isLogged) {
        this.router.navigate(['/auth/login']);
      }
    }
    return true;
  }
}

import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Injectable } from '@angular/core';
import { ErrorService } from 'src/app/shared/services/error.service';
import { EMPTY } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private errorService: ErrorService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (route.routeConfig?.path === 'login') {
      const isLogged = localStorage.getItem('username');
      if (isLogged) {
        this.errorService.err$$.next('You are already logged in !');
        this.router.navigate(['/']);
      }
    }

    if (route.routeConfig?.path === 'register') {
      const isLogged = localStorage.getItem('username');
      if (isLogged) {
        this.errorService.err$$.next(
          'You are already registered and logged in !'
        );
        this.router.navigate(['/']);
      }
    }

    if (route.routeConfig?.path === 'logout') {
      const isLogged = localStorage.getItem('username');
      if (!isLogged) {
        this.router.navigate(['/auth/login']);
      }
    }
    return true;
  }
}

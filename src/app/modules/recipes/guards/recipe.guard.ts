import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Injectable } from '@angular/core';
import { ErrorService } from 'src/app/shared/services/error.service';

@Injectable({ providedIn: 'root' })
export class RecipeGuard implements CanActivate {
  constructor(private errorService: ErrorService, private router: Router) {}

  isLogged!: boolean;

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (route.routeConfig?.path === 'add') {
      this.isLogged = !!localStorage.getItem('token');
      if (!this.isLogged) {
        this.errorService.err$$.next('Please, login !');
        this.router.navigate(['/']);
      }
    }

    if (route.routeConfig?.path === ':id/edit') {
      this.isLogged = !!localStorage.getItem('token');
      if (!this.isLogged) {
        this.errorService.err$$.next('Please, login !');
        this.router.navigate(['/']);
      }
    }

    return true;
  }
}

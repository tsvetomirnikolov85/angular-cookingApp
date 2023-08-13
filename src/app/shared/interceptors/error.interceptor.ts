import { Injectable, Provider } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { ErrorService } from '../services/error.service';
import { Router } from '@angular/router';
import { NotFoundComponent } from '../components/not-found/not-found.component';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private errorService: ErrorService, private router: Router) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((err) => {
        if (!!err.error.message) {
          if (err.error.message === 'Not found') {
            this.router.navigate(['/']);
            this.errorService.err$$.next(err.error.message);
            return [err];
          }
          this.errorService.err$$.next(err.error.message);
        } else {
          this.errorService.err$$.next(err.message);
        }
        return [err];
      })
    );
  }
}

export const errorInterceptorProvider: Provider = {
  multi: true,
  useClass: ErrorInterceptor,
  provide: HTTP_INTERCEPTORS,
};

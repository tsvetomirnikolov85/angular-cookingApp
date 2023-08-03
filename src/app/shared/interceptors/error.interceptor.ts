import { Injectable, Provider } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { EMPTY, Observable, catchError } from 'rxjs';
import { ErrorService } from '../services/error.service';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private errorService: ErrorService,
    private authService: AuthService
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((err) => {
        if (!!err.error.message) {
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

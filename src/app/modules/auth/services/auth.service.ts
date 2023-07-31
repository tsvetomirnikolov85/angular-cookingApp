import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../user/interfaces/user';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loggedUser: Object | undefined;
  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http
      .post<User>(`http://localhost:8080/users/login`, {
        username,
        password,
      })
      .pipe(tap((loggedUser) => (this.loggedUser = loggedUser)))
      .pipe(
        tap(() => {
          const key: string = 'auth';
          const value = JSON.stringify(this.loggedUser);
          localStorage.setItem(key, value);
        })
      );
  }

  register(username: string, imageUrl: string, password: string) {
    return this.http
      .post<User>(`http://localhost:8080/users/register`, {
        username,
        imageUrl,
        password,
      })
      .pipe(tap((loggedUser) => (this.loggedUser = loggedUser)))
      .pipe(
        tap(() => {
          const key: string = 'auth';
          const value = JSON.stringify(this.loggedUser);
          localStorage.setItem(key, value);
        })
      );
  }

  logout(): void {
    this.loggedUser = [];
  }
}

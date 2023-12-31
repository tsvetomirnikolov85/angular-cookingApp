import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../user/interfaces/user';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLogged$$ = new BehaviorSubject<boolean>(false);
  token$$ = new BehaviorSubject<string>('');
  id$$ = new BehaviorSubject<string>('');
  username$$ = new BehaviorSubject<string>('');
  userImg$$ = new BehaviorSubject<string>('');
  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http
      .post<User>(`http://localhost:8080/users/login`, {
        username,
        password,
      })
      .pipe(
        tap((user) => {
          localStorage.clear();
          this.isLogged$$.next(true);
          this.token$$.next(user.accessToken);
          this.id$$.next(user._id);
          this.username$$.next(user.username);
          this.userImg$$.next(user.imageUrl);
          localStorage.setItem('id', user._id);
          localStorage.setItem('token', user.accessToken);
          localStorage.setItem('username', user.username);
          localStorage.setItem('userImg', user.imageUrl);
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
      .pipe(
        tap((user) => {
          localStorage.clear();
          this.isLogged$$.next(true);
          this.token$$.next(user.accessToken);
          this.id$$.next(user._id);
          this.username$$.next(user.username);
          this.userImg$$.next(user.imageUrl);
          localStorage.setItem('id', user._id);
          localStorage.setItem('token', user.accessToken);
          localStorage.setItem('username', user.username);
          localStorage.setItem('userImg', user.imageUrl);
        })
      );
  }

  logout(): void {
    this.http.get('http://localhost:8080/users/logout');
    this.isLogged$$.next(false);
    localStorage.clear();
  }

  get loginStatus() {
    return this.isLogged$$.asObservable();
  }

  get loggedUsername() {
    return this.username$$.asObservable();
  }

  get loggedUserId() {
    return this.id$$.asObservable();
  }

  get loggedUserImg() {
    return this.userImg$$.asObservable();
  }
}

import { Component, OnInit } from '@angular/core';
import { AuthService } from './modules/auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-cookingApp';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    const id = localStorage.getItem('id');
    const username = localStorage.getItem('username');
    const userImg = localStorage.getItem('userImg');

    if (id && username && userImg) {
      this.authService.isLogged$$.next(true);
      this.authService.username$$.next(username);
      this.authService.userImg$$.next(userImg);
    }
  }
}

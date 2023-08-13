import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private authService: AuthService) {}
  isLogged!: Observable<boolean>;
  username!: Observable<string>;
  userImg!: Observable<string>;
  loggedUserId!: Observable<string>;
  ngOnInit(): void {
    this.isLogged = this.authService.loginStatus;
    this.username = this.authService.loggedUsername;
    this.userImg = this.authService.loggedUserImg;
    this.loggedUserId = this.authService.loggedUserId;
  }
}

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}

  onSubmitHandler(form: NgForm): void {
    if (form.invalid) {
      return;
    }
    const { username, password } = form.value;

    this.authService.login(username, password).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}

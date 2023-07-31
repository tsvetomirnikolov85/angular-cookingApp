import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private authService: AuthService, private router: Router) {}
  onRegisterSubmitHandler(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const { username, imageUrl, password, repass } = form.value;

    this.authService.register(username, imageUrl, password).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}

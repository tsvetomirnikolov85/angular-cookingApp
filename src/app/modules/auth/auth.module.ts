import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule } from '@angular/forms';
import { LogoutComponent } from './components/logout/logout.component';
import { RegisterFormCustomValidatorDirective } from './directives/register-form-custom-validator.directive';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    RegisterFormCustomValidatorDirective,
  ],
  imports: [CommonModule, AuthRoutingModule, FormsModule],
  exports: [LoginComponent, AuthRoutingModule, RegisterComponent],
})
export class AuthModule {}

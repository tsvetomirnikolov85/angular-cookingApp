import { Directive, Input } from '@angular/core';
import {
  FormGroup,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[appRegisterFormCustomValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useClass: RegisterFormCustomValidatorDirective,
      multi: true,
    },
  ],
})
export class RegisterFormCustomValidatorDirective implements Validator {
  constructor() {}
  validate(form: FormGroup): ValidationErrors | null {
    if (
      form.controls['repass']?.dirty &&
      form.controls['password']?.value !== form.controls['repass']?.value
    ) {
      form.controls['repass']?.setErrors({ matched: true });
    }

    if (
      form.controls['repass']?.dirty &&
      form.controls['repass']?.value === form.controls['password']?.value
    ) {
      form.controls['repass']?.clearValidators();
    }
    return null;
  }
}

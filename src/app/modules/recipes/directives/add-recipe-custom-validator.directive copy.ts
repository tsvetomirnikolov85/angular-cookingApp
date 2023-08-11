import { Directive } from '@angular/core';
import {
  FormGroup,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';
import { RecipesService } from '../services/recipes.service';

@Directive({
  selector: '[appAddRecipeCustomValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useClass: AddRecipeFormCustomValidatorDirective,
      multi: true,
    },
  ],
})
export class AddRecipeFormCustomValidatorDirective implements Validator {
  constructor(private recipeService: RecipesService) {}
  validate(form: FormGroup): ValidationErrors | null {
    if (form.controls['imageUrl']?.dirty) {
      this.recipeService.recipeImg$$.next(form.controls['imageUrl']?.value);
    }

    if (form.controls['imageUrl']?.pristine) {
      this.recipeService.recipeImg$$.next('');
    }

    return null;
  }
}

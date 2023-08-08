import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipesListComponent } from './components/recipes-list/recipes-list.component';
import { AddRecipeComponent } from './components/add-recipe/add-recipe.component';
import { EditRecipeComponent } from './components/edit-recipe/edit-recipe.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { FormsModule } from '@angular/forms';
import { AddRecipeFormCustomValidatorDirective } from './directives/add-recipe-custom-validator.directive';

@NgModule({
  declarations: [
    RecipesListComponent,
    AddRecipeComponent,
    EditRecipeComponent,
    RecipeDetailsComponent,
    AddRecipeFormCustomValidatorDirective,
  ],
  imports: [CommonModule, RecipesRoutingModule, FormsModule],
  exports: [
    RecipesListComponent,
    AddRecipeComponent,
    EditRecipeComponent,
    RecipeDetailsComponent,
  ],
})
export class RecipesModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipesListComponent } from './components/recipes-list/recipes-list.component';
import { AddRecipeComponent } from './components/add-recipe/add-recipe.component';
import { EditRecipeComponent } from './components/edit-recipe/edit-recipe.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';

@NgModule({
  declarations: [RecipesListComponent, AddRecipeComponent, EditRecipeComponent, RecipeDetailsComponent],
  imports: [CommonModule, RecipesRoutingModule],
})
export class RecipesModule {}

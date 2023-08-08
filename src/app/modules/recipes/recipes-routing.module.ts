import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesListComponent } from './components/recipes-list/recipes-list.component';
import { NotFoundComponent } from 'src/app/shared/components/not-found/not-found.component';
import { AddRecipeComponent } from './components/add-recipe/add-recipe.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { EditRecipeComponent } from './components/edit-recipe/edit-recipe.component';

const routes: Routes = [
  {
    path: 'all',
    component: RecipesListComponent,
  },
  {
    path: 'add',
    component: AddRecipeComponent,
  },
  {
    path: ':id',
    component: RecipeDetailsComponent,
  },
  {
    path: ':id/edit',
    component: EditRecipeComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipesRoutingModule {}

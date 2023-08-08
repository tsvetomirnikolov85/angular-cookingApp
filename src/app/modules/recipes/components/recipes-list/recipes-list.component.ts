import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../services/recipes.service';
import { Recipe } from '../../interfaces/recipe';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
})
export class RecipesListComponent implements OnInit {
  recipes!: Recipe[];

  iconClass = 'fa-regular fa-thumbs-up';

  constructor(private recipeService: RecipesService) {}
  like(): void {
    if (this.iconClass == 'fa-regular fa-thumbs-up') {
      this.iconClass = 'fa-solid fa-thumbs-up';
    } else if (this.iconClass == 'fa-solid fa-thumbs-up') {
      this.iconClass = 'fa-regular fa-thumbs-up';
    }
  }

  ngOnInit() {
    this.recipeService.getAllRecipes().subscribe({
      next: (r) => {
        this.recipes = r;
      },
    });
  }
}

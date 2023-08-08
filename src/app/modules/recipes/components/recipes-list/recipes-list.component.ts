import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../services/recipes.service';
import { Recipe } from '../../interfaces/recipe';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
})
<<<<<<< HEAD
export class RecipesListComponent implements OnInit {
  recipes!: Recipe[];

  iconClass = 'fa-regular fa-thumbs-up';

  constructor(private recipeService: RecipesService) {}
=======
export class RecipesListComponent {
  iconClass = 'fa-regular fa-thumbs-up';
>>>>>>> 6793b0917af5f6e6cd1fdafb7588770a51c7238b
  like(): void {
    if (this.iconClass == 'fa-regular fa-thumbs-up') {
      this.iconClass = 'fa-solid fa-thumbs-up';
    } else if (this.iconClass == 'fa-solid fa-thumbs-up') {
      this.iconClass = 'fa-regular fa-thumbs-up';
    }
  }
<<<<<<< HEAD

  ngOnInit() {
    this.recipeService.getAllRecipes().subscribe({
      next: (r) => {
        this.recipes = r;
      },
    });
  }
=======
>>>>>>> 6793b0917af5f6e6cd1fdafb7588770a51c7238b
}

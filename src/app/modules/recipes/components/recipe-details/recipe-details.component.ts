import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../../interfaces/recipe';
import { RecipesService } from '../../services/recipes.service';
import { ErrorService } from 'src/app/shared/services/error.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css'],
})
export class RecipeDetailsComponent implements OnInit {
  constructor(
    private recipeService: RecipesService,
    private route: ActivatedRoute,
    private errorService: ErrorService
  ) {}
  recipeId!: string;
  recipe!: Recipe;
  loggedUserId!: any;
  isLiked!: boolean;
  isOwner!: boolean;
  iconStyle: string = 'fa-regular fa-thumbs-up';
  clicked = false;

  likeClickHandler() {
    if (!this.loggedUserId) {
      this.errorService.err$$.next('To use this function please login!');
      return;
    }
    this.iconStyle = 'fa-solid fa-thumbs-up';
    this.clicked = true;
    this.recipeService
      .putLike(this.recipeId, this.loggedUserId)
      .subscribe((r) => {});
  }

  ngOnInit(): void {
    this.route.params.subscribe((p) => {
      this.recipeId = p['id'];
    });
    this.loggedUserId = localStorage.getItem('id');

    this.recipeService.getSingleRecipe(this.recipeId).subscribe((recipe) => {
      this.recipe = recipe;
      this.isLiked = recipe.likes.some(
        (id) => Object.values(id) == this.loggedUserId
      );
      this.isOwner = recipe?.ownerId == this.loggedUserId;
    });
  }
}

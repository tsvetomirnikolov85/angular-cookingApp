import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { RecipesService } from '../../services/recipes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Recipe } from '../../interfaces/recipe';
import { NotFoundComponent } from 'src/app/shared/components/not-found/not-found.component';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css'],
})
export class EditRecipeComponent {
  recipeImg!: BehaviorSubject<string>;
  productsString: string = '';
  descString: string = '';
  recipeId!: string;
  recipe!: Recipe;
  loggedUserId!: any;
  title: string = '';
  img: string = '';
  productsArray: string[] = [];
  descArray: string[] = [];
  oldTitle!: string;
  oldImg!: string;
  oldProducts!: string;
  oldDesc!: string;

  constructor(
    private recipeService: RecipesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  onEditRecipeSubmitHandler(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const { title, imageUrl, products, description } = form.value;

    this.productsString = products;
    this.productsString.split('\n').forEach((p) => {
      if (p !== '') {
        this.productsArray.push(p.trim());
      }
    });

    this.descString = description;
    this.descString.split('\n').forEach((p) => {
      if (p !== '') {
        this.descArray.push(p.trim());
      }
    });

    this.recipeService
      .updateRecipe(
        this.recipeId,
        title,
        imageUrl,
        this.productsArray,
        this.descArray
      )
      .subscribe(() => {
        this.router.navigate(['/recipes']);
      });
  }

  ngOnInit(): void {
    this.recipeImg = this.recipeService.recipeImg$$;
    this.route.params.subscribe((p) => {
      this.recipeId = p['id'];
    });

    this.loggedUserId = localStorage.getItem('id');

    this.recipeService.getSingleRecipe(this.recipeId).subscribe((recipe) => {
      this.recipe = recipe;
      if (recipe.ownerId !== this.loggedUserId) {
        this.router.navigate([NotFoundComponent]);
      }
      this.oldTitle = recipe.title;
      this.oldImg = recipe.imageUrl;
      this.oldProducts = recipe.products.join('\n');
      this.oldDesc = recipe.description.join('\n');
      this.recipeService.recipeImg$$.next(recipe.imageUrl);
    });
  }
}

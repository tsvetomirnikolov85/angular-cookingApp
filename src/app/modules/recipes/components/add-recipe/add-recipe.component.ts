import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { RecipesService } from '../../services/recipes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css'],
})
export class AddRecipeComponent implements OnInit {
  recipeImg!: BehaviorSubject<string>;
  productsString: string = '';
  descString: string = '';

  title: string = '';
  img: string = '';
  productsArray: string[] = [];
  descArray: string[] = [];

  constructor(private recipeService: RecipesService, private router: Router) {}
  onAddRecipeSubmitHandler(form: NgForm) {
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
      .postRecipe(title, imageUrl, this.productsArray, this.descArray)
      .subscribe(() => {
        this.router.navigate(['/recipes']);
      });
  }

  ngOnInit(): void {
    this.recipeImg = this.recipeService.recipeImg$$;
  }
}

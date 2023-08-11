import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Recipe } from '../interfaces/recipe';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  RECIPE_URL: string = 'http://localhost:8080/recipes';
  recipeImg$$ = new BehaviorSubject<string>('');

  constructor(private http: HttpClient, private router: Router) {}

  postRecipe(
    title: string,
    imageUrl: string,
    products: string[],
    description: string[]
  ) {
    return this.http.post<Recipe[]>(`${this.RECIPE_URL}`, {
      title,
      imageUrl,
      products,
      description,
      ownerId: localStorage.getItem('id'),
      ownerImg: localStorage.getItem('userImg'),
      ownerName: localStorage.getItem('username'),
      likes: [],
    });
  }

  getAllRecipes() {
    return this.http.get<Recipe[]>(`${this.RECIPE_URL}`);
  }
  getSingleRecipe(id: string) {
    return this.http.get<Recipe>(`${this.RECIPE_URL}/${id}`);
  }
  putLike(recipeId: string, userId: string) {
    return this.http.put(`${this.RECIPE_URL}/${recipeId}/like`, { userId });
  }
  deleteRecipe(id: string) {
    this.http.delete(`${this.RECIPE_URL}/${id}`).subscribe(() => {
      this.router.navigate(['/recipes']);
    });
  }
}

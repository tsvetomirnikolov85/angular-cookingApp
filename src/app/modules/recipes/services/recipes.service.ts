import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Recipe } from '../interfaces/recipe';
import { AuthService } from '../../auth/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  RECIPE_URL: string = 'http://localhost:8080/recipes';
  recipeImg$$ = new BehaviorSubject<string>('');

  constructor(private http: HttpClient, private authService: AuthService) {}

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
}

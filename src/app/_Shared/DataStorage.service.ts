import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RecipeService } from '../Recipes/Recipe.service';
import { Recipe } from '../Recipes/Recipe';
import { AuthService } from '../Auth/Auth.service';

@Injectable()
export class DataStorageService {
  constructor(private http: Http, private recipeService: RecipeService,
              private authService: AuthService) { }

  public storeRecipes() {
    return this.http.put('https://clientpanel-e8dc1.firebaseio.com/recipes.json?auth=' + this.authService.getToken(), this.recipeService.getRecipes());
  }
  public getRecipes() {
    const token = this.authService.getToken();

    return this.http.get('https://clientpanel-e8dc1.firebaseio.com/recipes.json?auth=' + token)
      .subscribe(
        (response: Response) => {
          const recipes: Recipe[] = response.json();
          this.recipeService.setRecipes(recipes);
        });
  }
}
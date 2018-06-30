import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './Recipe';
import { Ingredient } from '../_Shared/Ingredient';
import { ShoppingListService } from '../ShoppingList/ShoppingList.service';

@Injectable()
export class RecipeService {
  //#region Properties
  public recipesChanged = new EventEmitter<Recipe[]>();
  private recipes: Recipe[] = [
    new Recipe( // Initializing New Test Recipe Item
      /* Name: */        'Tasty Schnitzel',
      /* Decription: */  'A Super Tasty Schnitzel - Just Awesome',
      /* Image URL: */   'https://www.recipetineats.com/wp-content/uploads/2017/08/Schnitzel-3-landscape.jpg',
      /* Ingredients: */ [
        new Ingredient('Chicken Breast', 1),
        new Ingredient('French Fries', 20),
      ]
    ),
    new Recipe( // Initializing New Test Recipe Item
      /* Name: */        'Big Fat Burger',
      /* Decription: */  'What Else Need To Say',
      /* Image URL: */   'https://media.daysoftheyear.com/20171223114556/hamburger-day1.jpg',
      /* Ingredients: */ [
        new Ingredient('Burger Patty', 1),
        new Ingredient('Cheddar Slice', 1),
        new Ingredient('Burger Buns', 1),
      ]
    ),
  ];
  //#endregion

  constructor(private shopService: ShoppingListService) { }

  public setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.emit(this.recipes.slice());
  }
  public getRecipe(index: number) {
    return this.recipes[index];
  }
  public getRecipes() {
    return this.recipes.slice(); /* <= Returning A Copy Of The Local Array,
    Instead Of A Referance To The Original Private Object */
  }
  public addIngredients(ingredients: Ingredient[]) {
    this.shopService.addIngredients(ingredients);
  }
  public addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.emit(this.recipes.slice());
  }
  public updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.emit(this.recipes.slice());
  }
  public deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.emit(this.recipes.slice());
  }
}

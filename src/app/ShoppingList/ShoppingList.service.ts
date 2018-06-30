import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../_Shared/Ingredient';

@Injectable()
export class ShoppingListService {
  //#region Properties
  public ingredientsChanged = new EventEmitter<Ingredient[]>();
  public startedEditing = new EventEmitter<number>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];
  //#endregion
  constructor() { }

  public getIngredients() : Ingredient[] {
    return this.ingredients.slice();
  }
  public getIngredient(index: number) {
    return this.ingredients[index];
  }
  public addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
  public addIngredients(items: Ingredient[]) {
    this.ingredients.push(...items);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
  public updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
  public deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}

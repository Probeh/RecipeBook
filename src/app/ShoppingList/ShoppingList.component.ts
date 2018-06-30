import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../_Shared/Ingredient';
import { ShoppingListService } from './ShoppingList.service';

@Component({
  selector: 'app-ShoppingList',
  templateUrl: './ShoppingList.component.html',
  styleUrls: ['./ShoppingList.component.css']
})
export class ShoppingListComponent implements OnInit {
  public ingredients: Ingredient[];

  constructor(private shopService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shopService.getIngredients();
    this.shopService.ingredientsChanged.subscribe((list: Ingredient[]) => {
      this.ingredients = list;
    });
  }

  public onEditItem(index: number) {
    this.shopService.startedEditing.emit(index);
  }
}

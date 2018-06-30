import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Ingredient } from '../../_Shared/Ingredient';
import { ShoppingListService } from '../ShoppingList.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ShoppingEdit',
  templateUrl: './ShoppingEdit.component.html',
  styleUrls: ['./ShoppingEdit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('shopForm') public listForm: NgForm;
  public editMode: boolean = false;
  public editedItemIndex: number;
  public editedItem: Ingredient;
  constructor(private shopService: ShoppingListService) { }

  ngOnInit() {
    this.shopService.startedEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editMode = true;
          this.editedItem = this.shopService.getIngredient(index);
          this.listForm.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount
          });
        }
      );
  }

  public onSubmit(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    
    if (this.editMode) {
      this.shopService.updateIngredient(this.editedItemIndex, newIngredient);
    }
    else {
      const valueCheck = this.shopService.getIngredients().find(item => item.name == newIngredient.name);
      if (valueCheck != null) {
        this.shopService.updateIngredient(this.shopService.getIngredients().findIndex(item => item.name == newIngredient.name), new Ingredient(newIngredient.name, newIngredient.amount + valueCheck.amount));
      }
      else {
        this.shopService.addIngredient(newIngredient);
      }
    }

    this.onClear();
  }
  public onDelete() {
    this.shopService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }
  public onClear() {
    this.listForm.reset();
    this.editMode = false;
  }
}

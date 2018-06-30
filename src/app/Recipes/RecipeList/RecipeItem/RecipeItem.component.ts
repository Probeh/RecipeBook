import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../Recipe';

@Component({
  selector: 'app-RecipeItem',
  templateUrl: './RecipeItem.component.html',
  styleUrls: ['./RecipeItem.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() public recipe: Recipe;
  @Input() public index: number;

  constructor() { }

  ngOnInit() {
  }
}

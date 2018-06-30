import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../Recipe';
import { RecipeService } from '../Recipe.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-RecipeList',
  templateUrl: './RecipeList.component.html',
  styleUrls: ['./RecipeList.component.css']
})
export class RecipeListComponent implements OnInit {
  public recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService, 
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.recipeService.recipesChanged
      .subscribe((value: Recipe[]) => { this.recipes = value; });
    this.recipes = this.recipeService.getRecipes();
  }
  public onNewRecipe() {
    this.router.navigate(['New'], { relativeTo: this.route });
  }
}

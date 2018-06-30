import { Component, OnInit } from '@angular/core';
import { Recipe } from '../Recipe';
import { RecipeService } from '../Recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-RecipeDetail',
  templateUrl: './RecipeDetail.component.html',
  styleUrls: ['./RecipeDetail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  public recipe: Recipe;
  public id: number;
  constructor(private recipeService: RecipeService, 
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = parseInt(params['id']);
        this.recipe = this.recipeService.getRecipe(this.id);
    });
  }

  public addToShoppingList() {
    this.recipeService.addIngredients(this.recipe.ingredients);
  }
  public onEditRecipe() {
    this.router.navigate(['Edit'], { relativeTo: this.route });
  }
  public onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/Recipes'], { relativeTo: this.route });
  }
}

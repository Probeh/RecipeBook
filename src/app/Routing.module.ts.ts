import { NgModule }              from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';
import { RecipesComponent }      from './Recipes/Recipes.component';
import { ShoppingListComponent } from './ShoppingList/ShoppingList.component';
import { RecipeStartComponent }  from './Recipes/RecipeStart/RecipeStart.component';
import { RecipeDetailComponent } from './Recipes/RecipeDetail/RecipeDetail.component';
import { RecipeEditComponent }   from './Recipes/RecipeEdit/RecipeEdit.component';
import { SignupComponent }       from './Auth/Signup/Signup.component';
import { SigninComponent }       from './Auth/Signin/Signin.component';
import { AuthGuardService }      from './Auth/AuthGuard.service';

const appRoutes: Routes = [
  { path: '', redirectTo: '/Recipes', pathMatch: 'full' },
  { path: 'Recipes',    component: RecipesComponent, children: [
    { path: '',         component: RecipeStartComponent },
    { path: 'New',      component: RecipeEditComponent, canActivate: [AuthGuardService] },
    { path: ':id',      component: RecipeDetailComponent },
    { path: ':id/Edit', component: RecipeEditComponent, canActivate: [AuthGuardService] },
  ] },
  { path: 'ShoppingList', component: ShoppingListComponent },
  { path: 'Signup', component: SignupComponent },
  { path: 'Login', component:  SigninComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class RoutingModule { }

//#region Importing Modules
import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { HttpModule }    from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RoutingModule } from './Routing.module.ts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//#endregion

//#region Importing Components
import { AppComponent }    from './app.component';
import { HeaderComponent } from './Header/Header.component';
// ShoppingList Components
import { ShoppingListComponent } from './ShoppingList/ShoppingList.component';
import { ShoppingEditComponent } from './ShoppingList/ShoppingEdit/ShoppingEdit.component';
// Recipe Components
import { RecipesComponent }      from './Recipes/Recipes.component';
import { RecipeListComponent }   from './Recipes/RecipeList/RecipeList.component';
import { RecipeItemComponent }   from './Recipes/RecipeList/RecipeItem/RecipeItem.component';
import { RecipeDetailComponent } from './Recipes/RecipeDetail/RecipeDetail.component';
import { RecipeStartComponent }  from './Recipes/RecipeStart/RecipeStart.component';
import { RecipeEditComponent }   from './Recipes/RecipeEdit/RecipeEdit.component';
// Authentication Components
import { SigninComponent } from './Auth/Signin/Signin.component';
import { SignupComponent } from './Auth/Signup/Signup.component';
//#endregion

//#region Importing Services
import { RecipeService }       from './Recipes/Recipe.service';
import { DataStorageService }  from './_Shared/DataStorage.service';
import { ShoppingListService } from './ShoppingList/ShoppingList.service';
import { DropdownDirective }   from './_Shared/DropdownDirective';
import { AuthService }         from './Auth/Auth.service';
import { AuthGuardService }    from './Auth/AuthGuard.service';
//#endregion

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RoutingModule,
  ],
  declarations: [
    // Base Components
    AppComponent,
    HeaderComponent,
    // Recipe Components
    RecipesComponent,
    RecipeStartComponent,
    RecipeEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    // Shopping Components
    ShoppingListComponent,
    ShoppingEditComponent,
    // Auth Components
    SigninComponent,
    SignupComponent,
    // Other Declarations
    DropdownDirective,
],
  bootstrap: [AppComponent],
  providers: [
    ShoppingListService,
    RecipeService,
    DataStorageService,
    AuthService,
    AuthGuardService
  ]
})

export class AppModule { }

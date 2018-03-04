import { Effect, Actions } from '@ngrx/effects';
import * as RecipeActions from '../store/recipe.actions';
import * as fromRecipe from '../store/recipe.reducers';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../recipe.model';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/withLatestFrom';
import { Store } from '@ngrx/store';

@Injectable()
export class RecipeEffects {

  url = 'https://ng-recipe-book-2018.firebaseio.com/recipes.json';

  @Effect()
  recipeFetch = this.actions$.ofType(RecipeActions.FETCH_RECIPES)
    .switchMap(() => {
      return this.httpClient.get<Recipe[]>(this.url)
        .map(
          (response: Recipe[]) => {
            return {
              type: RecipeActions.SET_RECIPES,
              payload: response
            };
          }
        );
    });

  @Effect({dispatch: false})
  recipeStore = this.actions$.ofType(RecipeActions.STORE_RECIPES)
    .withLatestFrom(this.store.select('recipes'))
    .switchMap(([action, state]) => {
      return this.httpClient.put(this.url, state.recipes);
    });

  constructor(private actions$: Actions, private httpClient: HttpClient, private store: Store<fromRecipe.FeatureState>) { }
}

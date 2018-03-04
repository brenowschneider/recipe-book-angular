import { Recipe } from '../recipe.model';
import { Ingredient } from '../../shared/ingredient.model';
import * as RecipeActions from './recipe.actions';
import * as fromApp from '../../store/app.reducers';

export interface FeatureState extends fromApp.AppState {
  recipes: State;
}

export interface State {
  recipes: Recipe[];
}

const initialState = {
  recipes: [
    new Recipe(
      'Cheddar McMelt',
      'McDonald\'s Cheddar McMelt',
      'https://img.buzzfeed.com/buzzfeed-static/static/2015-11/25/6/enhanced/webdr15/original-23667-1448452451-7.jpg?downsize=715:*&output-format=auto&output-quality=auto',
      [new Ingredient('Buns', 1), new Ingredient('Hamburger', 2), new Ingredient('Onion', 1)]
    ),
    new Recipe(
      'Outback Onion',
      'Onion from the Outback Restaurant',
      'https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/a/e5/ae5a9848-afb8-535c-a2c5-9fa300b87643/58a767610956f.image.png',
      [new Ingredient('Big Onion', 1), new Ingredient('Egg', 2), new Ingredient('Sauce', 2)]
    ),
  ]
};

export function recipeReducer(state = initialState, action: RecipeActions.RecipeActions) {

  switch (action.type) {
    case (RecipeActions.SET_RECIPES):
      return {
        ...state,
        recipes: [...action.payload]
      };
    case (RecipeActions.ADD_RECIPE):
      return {
        ...state,
        recipes: [...state.recipes, action.payload]
      };
    case (RecipeActions.UPDATE_RECIPE):
      const recipe = state.recipes[action.payload.index];
      const updatedRecipe = {
        ...recipe,
        ...action.payload.updatedRecipe
      };
      const recipes = [...state.recipes];
      recipes[action.payload.index] = updatedRecipe;
      return {
        ...state,
        recipes: recipes
      };
    case (RecipeActions.DELETE_RECIPE):
      const oldRecipes = [...state.recipes];
      oldRecipes.splice(action.payload, 1);
      return {
        ...state,
        recipes: oldRecipes
      };
    default:
      return state;
  }
}

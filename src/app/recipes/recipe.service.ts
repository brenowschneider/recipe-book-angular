import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
export class RecipeService {

    selectedRecipe = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Cheddar McMelt',
            'McDonald\'s Cheddar McMelt' ,
            'https://img.buzzfeed.com/buzzfeed-static/static/2015-11/25/6/enhanced/webdr15/original-23667-1448452451-7.jpg?downsize=715:*&output-format=auto&output-quality=auto',
            [new Ingredient('Buns', 1), new Ingredient('Hamburger', 2), new Ingredient('Onion', 1) ]
        ),
        new Recipe(
            'Outback Onion',
            'Onion from the Outback Restaurant' ,
            'https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/a/e5/ae5a9848-afb8-535c-a2c5-9fa300b87643/58a767610956f.image.png',
            [new Ingredient('Big Onion', 1), new Ingredient('Egg', 2), new Ingredient('Sauce', 2) ]
        ),
    ];
    
    getRecipes() {
        return this.recipes.slice();
    }
}
import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
export class RecipeService {
    
    selectedRecipe = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A testing recipe', 'Just testing', 'https://www.archanaskitchen.com//images/archanaskitchen/Dessert_Gourmet_Favorites/banana_fritter_recipe_Goreng_Pisang_shutterstock_82725232.jpg'),
        new Recipe('A testing recipe again', 'Just testing', 'https://www.archanaskitchen.com//images/archanaskitchen/Dessert_Gourmet_Favorites/banana_fritter_recipe_Goreng_Pisang_shutterstock_82725232.jpg'),
        new Recipe('A testing recipe 3: here we are again', 'Just testing', 'https://www.archanaskitchen.com//images/archanaskitchen/Dessert_Gourmet_Favorites/banana_fritter_recipe_Goreng_Pisang_shutterstock_82725232.jpg')
    ];

    getRecipes() {
        return this.recipes.slice();
    }
}
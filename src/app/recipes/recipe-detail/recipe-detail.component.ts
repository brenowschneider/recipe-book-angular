import { Recipe } from '../recipe.model';
import { Component, Input, OnInit } from '@angular/core';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipeDetail : Recipe;

  constructor(private shoppingListService : ShoppingListService) { }

  ngOnInit() {
  }

  onAddIngredientsToShoppingList(ingredients : Ingredient[]) {
    this.shoppingListService.AddIngredients(ingredients);
  }
}

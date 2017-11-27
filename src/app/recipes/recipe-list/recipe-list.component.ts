import { Recipe } from '../recipe.model';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe ('A testing recipe', 'Just testing', 'https://www.archanaskitchen.com//images/archanaskitchen/Dessert_Gourmet_Favorites/banana_fritter_recipe_Goreng_Pisang_shutterstock_82725232.jpg'),
    new Recipe ('A testing recipe again', 'Just testing', 'https://www.archanaskitchen.com//images/archanaskitchen/Dessert_Gourmet_Favorites/banana_fritter_recipe_Goreng_Pisang_shutterstock_82725232.jpg'),
    new Recipe ('A testing recipe 3: here we are again', 'Just testing', 'https://www.archanaskitchen.com//images/archanaskitchen/Dessert_Gourmet_Favorites/banana_fritter_recipe_Goreng_Pisang_shutterstock_82725232.jpg')
  ];

  @Output() RecipeListItemClicked = new EventEmitter<Recipe>();
  
  constructor() { }

  ngOnInit() {
  }

  onRecipeItemClick(recipe : Recipe){
    this.RecipeListItemClicked.emit(recipe);
  }

}

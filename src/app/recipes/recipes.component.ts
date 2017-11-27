import { Recipe } from './recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  clickedRecipe : Recipe;

  constructor() { }

  ngOnInit() {
  }

  onRecipeListItemClick(recipe : Recipe) {
    this.clickedRecipe = recipe;
  }

}

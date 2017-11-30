import { EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
export class ShoppingListService {

    @Output() IngredientAdded = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 4),
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    AddIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.IngredientAdded.emit(this.getIngredients());
    }

    AddIngredients(ingredients: Ingredient[]) {

        for (let ingredient of ingredients) {
            this.ingredients.push(ingredient);
        }

        this.IngredientAdded.emit(this.getIngredients());
    }
}
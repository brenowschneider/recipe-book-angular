import { EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';
export class ShoppingListService {

    @Output() IngredientAdded = new Subject<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 4),
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    AddIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.IngredientAdded.next(this.getIngredients());
    }

    AddIngredients(ingredients: Ingredient[]) {

        for (const ingredient of ingredients) {
            this.ingredients.push(ingredient);
        }

        this.IngredientAdded.next(this.getIngredients());
    }
}
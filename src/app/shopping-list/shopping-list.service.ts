import { EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';
export class ShoppingListService {

    IngredientChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 4),
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    getIngredient(index: number) {
        return this.ingredients[index];
    }

    AddIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.IngredientChanged.next(this.getIngredients());
    }

    UpdateIngredient(index: number, ingredient: Ingredient) {
        this.ingredients[index] = ingredient;
        this.IngredientChanged.next(this.getIngredients());
    }

    AddIngredients(ingredients: Ingredient[]) {

        for (const ingredient of ingredients) {
            this.ingredients.push(ingredient);
        }

        this.IngredientChanged.next(this.getIngredients());
    }

    DeleteIngredient(index: number) {
        this.ingredients.splice(index, 1);
        this.IngredientChanged.next(this.ingredients.slice());
    }
}

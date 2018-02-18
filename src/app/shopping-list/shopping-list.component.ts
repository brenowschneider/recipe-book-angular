import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] = [];
  serviceSubscription: Subscription;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();

    this.serviceSubscription = this.shoppingListService.IngredientChanged.subscribe((ingredients: Ingredient[]) => {
      this.ingredients = ingredients;
    });
  }

  ngOnDestroy() {
    this.serviceSubscription.unsubscribe();
  }

  AddIngredient(ingredient: Ingredient) {
    this.shoppingListService.AddIngredient(ingredient);
  }

  onEditItem(index: number) {
    this.shoppingListService.startedEditing.next(index);
  }

}

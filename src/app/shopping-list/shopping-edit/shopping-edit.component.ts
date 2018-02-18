import { ShoppingListService } from '../shopping-list.service';
import { Ingredient } from '../../shared/ingredient.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('f') Ingredientform: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editMode = true;
          this.editedItem = this.shoppingListService.getIngredient(index);
          this.Ingredientform.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount
          });
        }
      );
  }

  onAddItem(f: NgForm) {
    const ingredient = new Ingredient(f.value.name, f.value.amount);
    if (this.editMode) {
      this.shoppingListService.UpdateIngredient(this.editedItemIndex, ingredient);
    } else {
      this.shoppingListService.AddIngredient(ingredient);
    }

    this.clearIngredientForm();
  }

  clearIngredientForm() {
    this.editMode = false;
    this.Ingredientform.reset();
  }

  deleteIngredient() {
    this.shoppingListService.DeleteIngredient(this.editedItemIndex);
    this.clearIngredientForm();
  }
}

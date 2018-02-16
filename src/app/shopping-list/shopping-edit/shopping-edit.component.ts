import { ShoppingListService} from '../shopping-list.service';
import { Ingredient } from '../../shared/ingredient.model';
import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor(private shoppingListService : ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem(f : NgForm) {
    const ingredient = new Ingredient(f.value.name, f.value.amount);
    this.shoppingListService.AddIngredient(ingredient);
  }
}

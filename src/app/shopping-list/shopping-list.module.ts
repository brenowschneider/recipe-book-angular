import { NgModule } from '@angular/core';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [CommonModule, FormsModule],
  exports: [],
  declarations: [
    ShoppingListComponent,
    ShoppingEditComponent],
  providers: [],
})
export class ShoppingListModule { }

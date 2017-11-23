import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector : 'app-header',
    templateUrl : './header.component.html'
})
export class HeaderComponent {
    @Output() recipesClicked = new EventEmitter<{name: string, content: string}>();
    @Output() shoppingListClicked = new EventEmitter<{name: string, content: string}>();
    
    onRecipesClick() {
        this.recipesClicked.emit();
    }

    onShoppingListClick() {
        this.shoppingListClicked.emit();
    }

}
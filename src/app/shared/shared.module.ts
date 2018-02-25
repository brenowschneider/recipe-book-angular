import { NgModule } from '@angular/core';
import { DropDownDirective } from './dropdown.directive';
import { CommonModule } from '@angular/common';

@NgModule({
  exports: [CommonModule, DropDownDirective],
  declarations: [DropDownDirective]

})
export class SharedModule { }

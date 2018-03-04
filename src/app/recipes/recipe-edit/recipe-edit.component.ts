import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import * as RecipeActions from '../store/recipe.actions';
import * as fromRecipe from '../store/recipe.reducers';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private store: Store<fromRecipe.FeatureState>) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    );
  }

  private initForm() {
    let name = '';
    let imagePath = '';
    let description = '';
    let ingredients = new FormArray([]);

    if (this.editMode) {
      this.store.select('recipes').take(1).subscribe(
        (recipeState: fromRecipe.State) => {
          const recipe = recipeState.recipes[this.id];
          name = recipe.name;
          imagePath = recipe.imagePath;
          description = recipe.description;
          if (recipe['ingredients']) {
            recipe.ingredients.forEach(ingredient => {
              ingredients.push(
                new FormGroup({
                  'name': new FormControl(ingredient.name, Validators.required),
                  'amount': new FormControl(ingredient.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
                })
              );
            });
          }
        }
      );

    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(name, Validators.required),
      'imagePath': new FormControl(imagePath, Validators.required),
      'description': new FormControl(description, Validators.required),
      'ingredients': ingredients
    });
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
    );
  }

  onDeleteIngredient(index: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }


  onSubmit() {
    if (this.editMode) {
      this.store.dispatch(new RecipeActions.UpdateRecipe({ index: this.id, updatedRecipe: this.recipeForm.value }));
    } else {
      this.store.dispatch(new RecipeActions.AddRecipe(this.recipeForm.value));
    }

    this.onNavigateBack();
  }

  onNavigateBack() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  getControls() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

}

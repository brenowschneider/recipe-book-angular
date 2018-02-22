import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse} from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';

@Injectable()
export class DataStorageService {
    url = 'https://ng-recipe-book-2018.firebaseio.com/recipes.json';
    constructor(private httpClient: HttpClient, private recipeService: RecipeService) {}

    storeRecipes() {
       return this.httpClient.put(this.url, this.recipeService.getRecipes());
    }

    getRecipes() {
        this.httpClient.get<Recipe[]>(this.url)
            .subscribe(
                (response: Recipe[]) => {
                    console.log(response);
                    const recipes: Recipe[] = response;
                    this.recipeService.setRecipes(recipes);
                }
            );
     }
}

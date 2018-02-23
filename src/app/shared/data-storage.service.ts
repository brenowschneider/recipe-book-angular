import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams} from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {
    url = 'https://ng-recipe-book-2018.firebaseio.com/recipes.json';
    constructor(private httpClient: HttpClient, private recipeService: RecipeService, private authService: AuthService) {}

    storeRecipes() {
        const params = new HttpParams().set('auth', this.authService.getToken());
        return this.httpClient.put(this.url, this.recipeService.getRecipes(), {params : params});
    }

    getRecipes() {
        const params = new HttpParams().set('auth', this.authService.getToken());
        this.httpClient.get<Recipe[]>(this.url, {params : params})
            .subscribe(
                (response: Recipe[]) => {
                    console.log(response);
                    const recipes: Recipe[] = response;
                    this.recipeService.setRecipes(recipes);
                }
            );
     }
}

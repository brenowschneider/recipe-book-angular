import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import * as FromApp from '../store/app.reducers';
import * as FromAuth from './store/auth.reducers';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private store: Store<FromApp.AppState>) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.store.select('auth').map(
      (authState: FromAuth.State) => {
        return authState.authenticated;
      }
    );
  }
}

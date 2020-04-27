import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {User} from "./interfaces";

@Injectable({
  providedIn: 'root'
})
export class AppGuardGuard implements CanActivate {
  isAuth = false;

  login(user: User) {
    console.log(user)
    this.isAuth = true;
  }

  logout() {
    this.isAuth = false;
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.isAuth;
  }

}

import { Injectable } from '@angular/core';
import { CanLoad, UrlTree, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../../core/services/login.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanLoad {
  constructor(private loginService: LoginService) {}
  canLoad(
    route: Route
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    console.log(this.loginService.getIsLogin());
    return this.loginService.getIsLogin();
  }
}

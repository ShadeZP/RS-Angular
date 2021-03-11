import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  isLogin = false;
  constructor() {}
  toggleLogin() {
    this.isLogin = !this.isLogin;
  }
  getIsLogin() {
    return this.isLogin;
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  isLogin$ = new BehaviorSubject(false);
  // IsAuth$ = this.isLogin$.asObservable();
  // isLogin = false;
  constructor() {}
  /*  toggleLogin() {
    this.isLogin = !this.isLogin;
    console.log('LoginService', this.isLogin);
  }
    getIsLogin(): Observable<boolean> {
    return of(this.isLogin);
  }*/

  toggleLogin() {
    this.isLogin$.next(!this.isLogin$.value);
  }
}

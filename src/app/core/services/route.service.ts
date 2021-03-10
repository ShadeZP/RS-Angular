import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RouteService {
  constructor(private router: Router) {}
  route(path: string): void {
    console.log(path);
    this.router.navigateByUrl(path);
  }
}

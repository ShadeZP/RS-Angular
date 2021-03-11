import { LoginService } from './../../../core/services/login.service';
import { RouteService } from './../../../core/services/route.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TabsConfig } from 'src/app/modeles/appItems';
import { appTabsConfig } from '../../constans';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  tabs: TabsConfig[] = [];
  isAuth = true;
  constructor(
    public routeService: RouteService,
    public loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.tabs = appTabsConfig;
    this.isAuth = this.loginService.getIsLogin();
  }

  route(path: string): void {
    this.routeService.route(path);
  }
  toggleLogin() {
    this.loginService.toggleLogin();
    this.isAuth = this.loginService.getIsLogin();
  }
}

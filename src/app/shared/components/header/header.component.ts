import { LoginService } from '../../../core/services/login.service';
import { RouteService } from '../../../core/services/route.service';
import { Component, OnInit } from '@angular/core';
import { TabsConfig } from 'src/app/modeles/appItems';
import { AppPath, appTabsConfig } from '../../constans';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  tabs: TabsConfig[] = [];
  isAuth$ = true;
  constructor(
    public routeService: RouteService,
    public loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.tabs = appTabsConfig;
    this.loginService.isLogin$.subscribe((isLogin) => (this.isAuth$ = isLogin));
  }

  route(path: string): void {
    if (this.isAuth$ && path === 'product-list') {
      this.routeService.route(`${AppPath.admin}/${path}`);
    } else {
      this.routeService.route(path);
    }
  }

  toggleLogin() {
    this.loginService.toggleLogin();
  }
}

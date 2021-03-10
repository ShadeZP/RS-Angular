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
  constructor(public router: Router) {}
  route(path: string, event: any): void {
    this.router.navigateByUrl(path);
    console.log(event.currentTarget);
  }
  ngOnInit(): void {
    this.tabs = appTabsConfig;
  }
}

import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: 'task', title: 'หน้าหลัก',  icon: 'pe-7s-graph', class: '' },
    { path: 'product-in', title: 'รับสินค้า',  icon:'pe-7s-note2', class: '' },
    { path: 'product-out', title: 'ขายสินค้า',  icon:'pe-7s-cart', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
          return false;
    } else {
      return true;
    }
  };
}

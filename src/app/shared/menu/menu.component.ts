import { Component } from '@angular/core';

interface MenuItem {
  route: string;
  text: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent{

  menu: MenuItem[] = [
    {
      route: 'graph/bar',
      text: 'Bars'
    },
    {
      route: 'graph/bar-double',
      text: 'Double Bars'
    },
    {
      route: 'graph/donut',
      text: 'Donut'
    },
    {
      route: 'graph/donut-http',
      text: 'Donut HTTP'
    }
  ];

}

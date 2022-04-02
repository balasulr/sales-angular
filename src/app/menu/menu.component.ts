import { Component, OnInit } from '@angular/core';
import { Menu } from './menu.class';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  // Added Properties here
  menus: Menu[] = [ // Array of instances of menu
    new Menu("Home", "/home"), // Display is home & route is "/home"
    new Menu("Customer", "/customer/list"),
    new Menu("About", "/about")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

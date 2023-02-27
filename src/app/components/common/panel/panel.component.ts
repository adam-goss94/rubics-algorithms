import { MenuItemsService } from './../../../services/menu-items/menu-items.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {
  public content = {
    t_x_t: {
      title: "3x3",
      menuItems: {
        1: "3x3_menuItem_first",
        2: "3x3_menuItem_second",
        3: "3x3_menuItem_third"
      },
    },
  }
  public menuItems = {};

  constructor(private MenuItemsService: MenuItemsService) {}

  ngOnInit() {
    this.MenuItemsService.getData()
    .subscribe(data => this.menuItems = data);
    console.log(this.menuItems);
  }
}

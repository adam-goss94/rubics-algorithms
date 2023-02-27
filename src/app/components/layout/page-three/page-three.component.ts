import { MenuItemsService } from './../../../services/menu-items/menu-items.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-page-three',
  templateUrl: './page-three.component.html',
  styleUrls: ['./page-three.component.scss']
})
export class PageThreeComponent {

  public menuItems = {};

  constructor(private MenuItemsService: MenuItemsService) {}

  ngOnInit() {
    this.MenuItemsService.getData()
    .subscribe(data => this.menuItems = data);
    console.log(this.menuItems);
  }
}
